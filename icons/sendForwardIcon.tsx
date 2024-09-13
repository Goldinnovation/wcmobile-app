import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
  lineColor: string;
}

const SendForwardIcon: React.FC<IconProp> = ({ width, height, lineColor }) => {
  return (
    <Svg
      width= {width}
      height={height}
      viewBox="0 0 32 32"
    >
      <G>
        <Path
          d="M2 31h-.038A1 1 0 0 1 1 30.1c-.033-.36-.872-8.982 4.433-14.874C8.375 11.957 12.6 10.208 18 10.018V6a1 1 0 0 1 1.673-.74l11 10a1 1 0 0 1 0 1.48l-11 10A1 1 0 0 1 18 26v-4.093c-3.116-.227-13.453-.322-15.016 8.272A1 1 0 0 1 2 31ZM20 8.261V11a1 1 0 0 1-1 1c-5.29 0-9.354 1.535-12.081 4.564a16.165 16.165 0 0 0-3.678 8.243c4.975-6.16 15.759-4.818 15.891-4.8A1 1 0 0 1 20 21v2.739L28.513 16Z"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        ></Path>
      </G>
    </Svg>
  );
};

export default SendForwardIcon;
