import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const LocationPin: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height}  viewBox="0 0 591.93 507.63">
      <G xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M18 2C11.935 2 7 7.383 7 14c0 6.344 9.792 19.073 10.209 19.612a1 1 0 0 0 1.582 0C19.208 33.073 29 20.344 29 14c0-6.617-4.935-12-11-12zm0 16a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5z"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        
        />
      </G>
    </Svg>
  );
};

export default LocationPin;
