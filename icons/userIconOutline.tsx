import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const UserIconOutline: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height}  viewBox="0 0 32 32">
        <G>
          <Path
            d="M21 11a5 5 0 1 1-5-5 5 5 0 0 1 5 5zm9 5A14 14 0 1 1 16 2a14 14 0 0 1 14 14zm-6.22 5.22a10.64 10.64 0 0 1 1.67 2.17A12 12 0 1 0 4 16a11.92 11.92 0 0 0 2.55 7.39 11 11 0 0 1 17.23-2.17z"
            data-name="Layer 11"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default UserIconOutline;
