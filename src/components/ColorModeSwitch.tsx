import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";
import { HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch checked={colorMode === "dark"} onCheckedChange={toggleColorMode}>
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
