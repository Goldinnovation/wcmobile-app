import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const MenuSquare: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28">
     
        <G>
          <Path
            d="M13 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1zm-2 1v7H4V4zM20.967 2.1a1 1 0 0 0-1.416 0L14.8 6.85a1 1 0 0 0 0 1.416l4.752 4.752a1 1 0 0 0 1.416 0l4.752-4.752a1 1 0 0 0 0-1.416zm-.708 2.122 3.337 3.337-3.337 3.337-3.337-3.337zM13 16a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1zm-2 1v7H4v-7zM26 16a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1zm-2 1v7h-7v-7z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default MenuSquare;
