import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const DayNightIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    // ffffff
    <Svg
      height={height}
      viewBox="0 0 32 32"
      width={width}
      id="fi_6889926"
    >
      <G id="Layer_2" data-name="Layer 2">
        <Path d="m16 6a1 1 0 0 0 1-1v-2a1 1 0 0 0 -2 0v2a1 1 0 0 0 1 1z"
        fill= "#ffffff"
        ></Path>
        <Path d="m16 26a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1-1z"
        fill= "#ffffff"
        ></Path>
        <Path d="m5 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
        fill= "#ffffff"
        
        ></Path>
        <Path d="m7.515 23.071-1.415 1.414a1 1 0 1 0 1.415 1.415l1.414-1.414a1 1 0 1 0 -1.414-1.414z"
        fill= "#ffffff"
        ></Path>
        <Path d="m7.515 8.929a1 1 0 0 0 1.414-1.414l-1.414-1.415a1 1 0 0 0 -1.415 1.415z"
        fill= "#ffffff"
        ></Path>
        <Path d="m17 8.06a8.363 8.363 0 0 0 -2 0 8 8 0 0 0 0 15.88 8.363 8.363 0 0 0 2 0 8 8 0 0 0 0-15.88zm-2 13.85a5.993 5.993 0 0 1 0-11.82 5.47 5.47 0 0 1 1-.09v12a5.47 5.47 0 0 1 -1-.09z"
        fill= "#ffffff"
        ></Path>
      </G>
    </Svg>
  );
};

export default DayNightIcon;
