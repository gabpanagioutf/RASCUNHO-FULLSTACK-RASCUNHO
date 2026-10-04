import { createContext, useState, useEffect } from "react";

export const FilmesContext = createContext();

const API_KEY = "7ac2fee0"; 

export function FilmesProvider({ children }) {
  const [atorSelecionado, setAtorSelecionado] = useState(null);
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarFilmes() {
      if (!atorSelecionado || !atorSelecionado.filmes || atorSelecionado.filmes.length === 0) {
        setFilmes([]);
        setErro("Selecione um ator primeiro.");
        return;
      }

      setErro("");
      setLoading(true);

      try {
        const requisicoes = atorSelecionado.filmes.map((titulo) =>
          fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(titulo)}&apikey=${API_KEY}`)
            .then((res) => res.json())
        );

        const resultados = await Promise.all(requisicoes);

        const erroApi = resultados.find((item) => item.Response === "False");
        if (erroApi) {
          setErro(`Erro na API: ${erroApi.Error}`);
          setFilmes([]);
          return;
        }

        const filmesValidos = resultados.filter((item) => item.Response === "True");
        setFilmes(filmesValidos);

      } catch (error) {
        setErro("Erro de conexão ao procurar os filmes.");
      } finally {
        setLoading(false);
      }
    }

    buscarFilmes();
  }, [atorSelecionado]);

  return (
    <FilmesContext.Provider
      value={{
        atorSelecionado,
        setAtorSelecionado,
        filmes,
        loading,
        erro
      }}
    >
      {children}
    </FilmesContext.Provider>
  );
}