import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const CloudIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} color="red" viewBox="0 0 100 100">
  
        <G>
          <Path
            fill="#ffffff"
            fill-rule="evenodd"
            d="M25.49 45.113c2.258-10.927 11.936-19.142 23.532-19.142 9.692 0 18.043 5.738 21.843 14.002a17.287 17.287 0 0 1 3.587-.374c9.507 0 17.215 7.707 17.215 17.215 0 6.269-3.351 11.755-8.36 14.765a14.39 14.39 0 0 1-8.054 2.45H22.79c-7.984 0-14.457-6.473-14.457-14.458s6.473-14.458 14.457-14.458z"
            clip-rule="evenodd"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default CloudIcon;
