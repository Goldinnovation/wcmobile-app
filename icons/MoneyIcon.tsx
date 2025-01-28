import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const MoneyEuroIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} color="red"  viewBox="0 0 24 24">
         <G>
          <Path
            d="M7.582 9A8.007 8.007 0 0 1 15 4c1.7 0 3.276.531 4.572 1.436a1 1 0 0 1-1.144 1.64A6 6 0 0 0 9.804 9H15a1 1 0 0 1 0 2H9.083a5.99 5.99 0 0 0 0 2H15a1 1 0 0 1 0 2H9.804a6 6 0 0 0 8.624 1.924 1 1 0 0 1 1.144 1.64A7.958 7.958 0 0 1 15 20a8.007 8.007 0 0 1-7.418-5H5a1 1 0 0 1 0-2h2.062a8.05 8.05 0 0 1 0-2H5a1 1 0 0 1 0-2z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default MoneyEuroIcon;
