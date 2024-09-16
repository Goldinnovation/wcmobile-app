import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
  color: string;
}

const MiniStar: React.FC<IconProp> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
    
        <G>
          <Path
            d="m512 197.816-186.039-12.231L255.898 9.569l-70.063 176.016L0 197.816l142.534 121.026-46.772 183.589L255.898 401.21l160.137 101.221-46.772-183.589z"
            fill="#ffff00"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default MiniStar;
