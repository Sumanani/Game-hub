import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading
      size={{
        base: "lg",
        lg: "2xl",
      }}
    >{`${gameQuery.platform?.name || ""} ${
      gameQuery.genre?.name || ""
    } Games`}</Heading>
  );
};

export default GameHeading;
