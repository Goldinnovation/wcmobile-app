import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const PinIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 59 59">
      
        <G>
          <Path
            d="M44.5 15c0-8.271-6.729-15-15-15s-15 6.729-15 15c0 7.934 6.195 14.431 14 14.949V58a1 1 0 1 0 2 0V29.949c7.805-.518 14-7.015 14-14.949zm-20 0c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default PinIcon;
