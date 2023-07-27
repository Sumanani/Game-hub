import { List, ListItem, HStack, Image, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "./../services/image-url";
import GeneresSkeleton from "./GeneresSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  return (
    <List>
      {isLoading && <GeneresSkeleton />}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingX={2} marginY={2}>
          <HStack>
            <Image
              borderRadius="4px"
              boxSize="32px"
              src={getCroppedImage(genre.image_background)}
            />
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
