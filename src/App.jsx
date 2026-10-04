import { useContext, useMemo } from "react";
import { FilmesContext } from "./contexts/FilmesContext";

import SelectFilmes from "./components/SelectFilmes";
import ListaFilmes from "./components/ListaFilmes";

function App() {
  const { filmes, loading, erro } = useContext(FilmesContext);

  const filmesOrdenados = useMemo(() => {
    if (!filmes) return [];
    return [...filmes].sort((a, b) =>
      a.Title.localeCompare(b.Title)
    );
  }, [filmes]);

  return (
    <div style={{ padding: "30px", backgroundColor: "#1e1e2f", minHeight: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", margin: "0 0 20px 0" }}>
        🎬 Filmes do Homem-Aranha
      </h1>

      <SelectFilmes />

      {erro && <p style={{ color: "#ff6b6b", textAlign: "center", marginTop: "20px" }}>{erro}</p>}

      {loading && <p style={{ color: "#ffd166", textAlign: "center", marginTop: "20px" }}>Carregando filmes da OMDb...</p>}

      {!loading && <ListaFilmes filmes={filmesOrdenados} />}
    </div>
  );
}

export default App;