function ListaFilmes({ filmes }) {
  if (!filmes || filmes.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "30px",
        padding: "0 20px"
      }}
    >
      {filmes.map((filme) => (
        <div
          key={filme.imdbID}
          style={{
            backgroundColor: "#2a2a3c",
            color: "white",
            padding: "15px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/200x300?text=Sem+Poster"}
            alt={filme.Title}
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
          />
          <h3 style={{ margin: "12px 0 6px", fontSize: "18px" }}>{filme.Title}</h3>
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#ccc" }}>
            <strong>Ano:</strong> {filme.Year}
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#aaa" }}>
            <strong>Diretor:</strong> {filme.Director}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListaFilmes;