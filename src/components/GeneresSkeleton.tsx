import { Skeleton, HStack, Card } from "@chakra-ui/react";

const GeneresSkeleton = () => {
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <Card>
      {genres.map((each) => (
        <HStack paddingX={2} marginY={2} key={each}>
          <Skeleton borderRadius="4px" boxSize="32px" />
          <Skeleton height="16px" width={"100px"} />
        </HStack>
      ))}
    </Card>
  );
};

export default GeneresSkeleton;
