import { Game } from "@/hooks/useGames";
import { Image, Heading, Box } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Box borderRadius={5} overflow="hidden" bg={"gray.800"}>
      <Image src={game.background_image} />
      <Box p={5}>
        <Heading fontSize="2xl">{game.name}</Heading>
      </Box>
    </Box>
  );
};

export default GameCards;
