import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const DayNightIcon: React.FC<IconProp> = ({ width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 591.93 507.63">
      <G xmlns="http://www.w3.org/2000/svg">
        <G data-name="Layer 2">
          <Path
            d="M16 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zM16 26a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM5 15H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM7.515 23.071 6.1 24.485A1 1 0 1 0 7.515 25.9l1.414-1.414a1 1 0 1 0-1.414-1.414zM7.515 8.929a1 1 0 0 0 1.414-1.414L7.515 6.1A1 1 0 0 0 6.1 7.515zM17 8.06a8.363 8.363 0 0 0-2 0 8 8 0 0 0 0 15.88 8.363 8.363 0 0 0 2 0 8 8 0 0 0 0-15.88zm-2 13.85a5.993 5.993 0 0 1 0-11.82 5.47 5.47 0 0 1 1-.09v12a5.47 5.47 0 0 1-1-.09z"
            fill="#ff0000"
            opacity="1"
            data-original="#000000"
          />
        </G>
      </G>
    </Svg>
  );
};

export default DayNightIcon;
