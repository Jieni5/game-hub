import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { TbXboxX } from "react-icons/tb";
import { IoSad } from "react-icons/io5";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
     
  return (
    <HStack marginY={1} spacing={2}>
      {platforms.map((platform) => (
        <Icon  as={iconMap[platform.slug]} color="gray.500"/> 
    ))}
    </HStack>
    
  );
};

export default PlatformIconList;
