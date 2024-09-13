import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle, Defs, ClipPath } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const ExpandScreenIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64">
  
        <G>
          <Path
            d="M61 31v24a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h24a3 3 0 0 1 0 6H11a2.006 2.006 0 0 0-2 2v42a2.006 2.006 0 0 0 2 2h42a2.006 2.006 0 0 0 2-2V31a3 3 0 0 1 6 0z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M61 5v14a3 3 0 0 1-6 0v-5.76L36.96 31.28a3 3 0 0 1-4.24-4.24L50.76 9H45a3 3 0 0 1 0-6h14a2.006 2.006 0 0 1 2 2z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default ExpandScreenIcon;
