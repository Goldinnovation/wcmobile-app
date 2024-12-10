import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const UserOutline: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height}   viewBox="0 0 469.333 469.333">
   <G>
          <Path
            d="M234.667 213.333c58.91 0 106.667-47.756 106.667-106.667S293.577 0 234.667 0 128 47.756 128 106.667c.071 58.881 47.786 106.596 106.667 106.666zm0-170.666c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.653-64 64-64zM64 469.333h341.333c11.782 0 21.333-9.551 21.333-21.333 0-106.039-85.961-192-192-192s-192 85.961-192 192c.001 11.782 9.552 21.333 21.334 21.333zm170.667-170.666c74.202.092 137.119 54.573 147.819 128H86.848c10.7-73.427 73.616-127.908 147.819-128z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default UserOutline;
