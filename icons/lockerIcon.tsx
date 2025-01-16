import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const LockerIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg
      id="fi_9573162"
      height={height}
         viewBox="0 0 50 50"
      width={width}
      data-name="Layer 1"
    >
     
        <G>
          <Path
            fill="#ffffff"
            d="M25 27.083a2.083 2.083 0 0 0-2.083 2.084v6.25a2.083 2.083 0 1 0 4.166 0v-6.25A2.083 2.083 0 0 0 25 27.083zm10.417-8.333v-4.167a10.417 10.417 0 0 0-20.834 0v4.167A6.25 6.25 0 0 0 8.333 25v14.583a6.25 6.25 0 0 0 6.25 6.25h20.834a6.25 6.25 0 0 0 6.25-6.25V25a6.25 6.25 0 0 0-6.25-6.25zM18.75 14.583a6.25 6.25 0 0 1 12.5 0v4.167h-12.5zm18.75 25a2.084 2.084 0 0 1-2.083 2.084H14.583a2.083 2.083 0 0 1-2.083-2.084V25a2.083 2.083 0 0 1 2.083-2.083h20.834A2.083 2.083 0 0 1 37.5 25z"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default LockerIcon;
