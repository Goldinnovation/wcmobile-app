import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const CalenderIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} color="red" viewBox="0 0 591.93 507.63">
      <G xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M279 364c0 22.056 17.944 40 40 40h47c22.056 0 40-17.944 40-40v-47c0-22.056-17.944-40-40-40h-47c-22.056 0-40 17.944-40 40v47zm40-47h47l.025 46.999L366 364h-47v-47z"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="386"
          cy="210"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="299"
          cy="210"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Path
          d="M492 352c11.046 0 20-8.954 20-20V120c0-44.112-35.888-80-80-80h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v212c0 11.046 8.954 20 20 20z"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="125"
          cy="384"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="125"
          cy="210"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="125"
          cy="297"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="212"
          cy="297"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="212"
          cy="210"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
        <Circle
          cx="212"
          cy="384"
          r="20"
          fill="#ffffff"
          opacity="1"
          data-original="#000000"
        />
      </G>
    </Svg>
  );
};

export default CalenderIcon;
