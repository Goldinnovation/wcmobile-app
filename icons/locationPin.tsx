import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const LocationPin: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg
      id="fi_9573162"
      height={height}
      viewBox="0 0 36 36"
      width={width}
      data-name="Layer 1"
    >
      <Path d="m18 2c-6.065 0-11 5.383-11 12 0 6.344 9.792 19.073 10.209 19.612a1 1 0 0 0 1.582 0c.417-.539 10.209-13.268 10.209-19.612 0-6.617-4.935-12-11-12zm0 16a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z"
      fill= "#ffffff"
      ></Path>
    </Svg>
  );
};

export default LocationPin;
