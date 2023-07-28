import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwithc";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="32px" />
      <Box width="100%" marginX={5}>
        <SearchInput onSearch={onSearch} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
