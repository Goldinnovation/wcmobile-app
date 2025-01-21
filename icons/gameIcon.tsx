import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const GameIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} color="red" 
      viewBox="0 0 384 384.248"
    >
     
        <G>
          <Path
            d="M299.691 224.246c-44.113 0-80 35.89-80 80 0 44.113 35.887 80 80 80 44.114 0 80-35.887 80-80 0-44.11-35.886-80-80-80zm0 128c-26.472 0-48-21.527-48-48 0-26.469 21.528-48 48-48s48 21.531 48 48c0 26.473-21.527 48-48 48zM.125 160.246H183.27L91.69 0zm55.137-32 36.43-63.75 36.433 63.75zM219.691 160.246h160v-160h-160zm32-128h96v96h-96zM35.691 382.879l56-56 56 56 22.633-22.633-56-56 56-56-22.633-22.629-56 56-56-56-22.632 22.63 56 56-56 56zm0 0"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default GameIcon;
