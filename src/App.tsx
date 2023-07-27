import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={3} area="aside">
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem padding="16px" area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
