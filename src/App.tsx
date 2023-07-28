import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const onSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "225px 1fr",
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
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={onSelectPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
