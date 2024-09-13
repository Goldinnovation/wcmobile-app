import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle, Defs, ClipPath } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const CloseMenuIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64">
     
        <G>
          <Path
            d="M21 13a8 8 0 0 0-8 8 8.1 8.1 0 0 0 .46 2.67 2 2 0 0 0 3.77-1.34A4 4 0 1 1 21 25a2 2 0 0 0 0 4 8 8 0 0 0 0-16zM21 35a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Circle
            cx="43"
            cy="43"
            r="8"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Circle>
          <Circle
            cx="43"
            cy="21"
            r="8"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Circle>
        </G>
    </Svg>
  );
};

export default CloseMenuIcon;
