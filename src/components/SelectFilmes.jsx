import { useContext } from "react";
import { FilmesContext } from "../contexts/FilmesContext";

const FILMES_POR_ATOR = {
  "Tobey Maguire": ["Spider-Man", "Spider-Man 2", "Spider-Man 3"],
  "Andrew Garfield": ["The Amazing Spider-Man", "The Amazing Spider-Man 2"],
  "Tom Holland": [
    "Spider-Man: Homecoming",
    "Spider-Man: Far from Home",
    "Spider-Man: No Way Home"
  ]
};

function SelectFilmes() {
  const { setAtorSelecionado } = useContext(FilmesContext);

  const handleChange = (e) => {
    const ator = e.target.value;
    if (!ator) {
      setAtorSelecionado(null);
      return;
    }

    setAtorSelecionado({
      ator,
      filmes: FILMES_POR_ATOR[ator] || []
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <select 
        onChange={handleChange}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #444",
          backgroundColor: "#2e2e40",
          color: "white",
          cursor: "pointer"
        }}
      >
        <option value="">-- Selecione um Ator --</option>
        <option value="Tobey Maguire">Tobey Maguire</option>
        <option value="Andrew Garfield">Andrew Garfield</option>
        <option value="Tom Holland">Tom Holland</option>
      </select>
    </div>
  );
}

export default SelectFilmes;