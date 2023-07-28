import { useState } from "react";
import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  orderBy: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const onSelectOrderBy = (orderBy: string) => {
    setGameQuery({ ...gameQuery, orderBy });
  };

  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
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
        <NavBar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={3} area="aside">
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem padding="16px" area="main">
        <HStack spacing={4} marginBottom={3}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={onSelectPlatform}
          />
          <SortSelector
            orderBy={gameQuery.orderBy}
            onSelectOrderBy={onSelectOrderBy}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
