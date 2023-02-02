import { useState } from "react";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import ChracterContainer from "./components/CharacterContainer/ChracterContainer";
import Search from "./components/Search/Search";

function App() {
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState("");

  const reqApi = async () => {
    const api = await fetch(
      `https://thesimpsonsquoteapi.glitch.me/quotes?character=${search}`
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Container>
      {/* <Search /> */}
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <ChracterContainer characters={characters} reqApi={reqApi} />
      )}
    </Container>
  );
}

export default App;
