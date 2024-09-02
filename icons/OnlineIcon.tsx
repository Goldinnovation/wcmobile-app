import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const OnlineIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 50 50"
    >
      <G>
        <Path
          d="M16.6 6.4c0 2.1 1.5 3.8 3.5 4.3C26.2 12 31 16.6 32.7 22.6c.4-1.4.6-3 .6-4.5 0-7.2-4.5-13.3-10.8-15.7-2.8-1.2-5.9.9-5.9 4zM33.4 43.6c0-2.1-1.5-3.8-3.5-4.3C23.8 38 19 33.4 17.3 27.4c-.4 1.4-.6 3-.6 4.5 0 7.2 4.5 13.3 10.8 15.7 2.8 1.2 5.9-.9 5.9-4zM6.4 33.4c2.1 0 3.8-1.5 4.3-3.5C12 23.8 16.6 19 22.6 17.3c-1.4-.4-3-.6-4.5-.6-7.2 0-13.3 4.5-15.7 10.8-1.2 2.8.9 5.9 4 5.9zM43.6 16.6c-2.1 0-3.8 1.5-4.3 3.5C38 26.2 33.4 31 27.4 32.7c1.4.4 3 .6 4.5.6 7.2 0 13.3-4.5 15.7-10.8 1.2-2.8-.9-5.9-4-5.9z"
          fill="#ffffff"
          opacity="0.5"
          data-original="#000000"
        ></Path>
        <Circle
          cx="25"
          cy="25"
          r="4"
          fill="#ffffff"
          opacity="0.5"
          data-original="#000000"
        ></Circle>
      </G>
    </Svg>
  );
};

export default OnlineIcon;
