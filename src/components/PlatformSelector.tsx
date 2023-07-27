import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "./../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton marginY="16px" as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
