import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const PlaybtnIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
  
        <G>
          <Path
            d="M19.69 9.11 6.8 2.58a3.28 3.28 0 0 0-3.24 0 3.32 3.32 0 0 0-1.44 3v12.98a3.34 3.34 0 0 0 1.44 3 2.79 2.79 0 0 0 1.48.4 3.93 3.93 0 0 0 1.76-.45L19.69 15c1.91-1 2.19-2.24 2.19-2.92s-.28-2-2.19-2.97zm-.91 4.06L5.9 19.7a1.38 1.38 0 0 1-1.3.12 1.43 1.43 0 0 1-.48-1.26V5.5a1.43 1.43 0 0 1 .48-1.26.87.87 0 0 1 .4-.11 1.94 1.94 0 0 1 .86.24l12.92 6.53c.68.34 1.1.78 1.1 1.13s-.42.79-1.1 1.14z"
            data-name="Layer 115"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default PlaybtnIcon;
