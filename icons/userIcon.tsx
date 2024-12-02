import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const UserIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height}viewBox="0 0 24 24">
    
        <G>
          <G fill="#000">
            <Path
              d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM10 13a7 7 0 0 0-7 7v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a7 7 0 0 0-7-7z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
            ></Path>
          </G>
        </G>
    </Svg>
  );
};

export default UserIcon;
