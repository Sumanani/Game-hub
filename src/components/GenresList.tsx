import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "./../services/image-url";
import GeneresSkeleton from "./GeneresSkeleton";

const GenresList = () => {
  const { data: genres, isLoading } = useGenres();
  return (
    <List>
      {isLoading && <GeneresSkeleton />}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingX={2} cursor={"pointer"} marginY={2}>
          <HStack>
            <Image
              borderRadius="4px"
              boxSize="32px"
              src={getCroppedImage(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
