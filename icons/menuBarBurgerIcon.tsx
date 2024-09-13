import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const MenuBarBurgerIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
     
        <G>
          <Path
            d="M13 18H5c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zM19 13H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1zM19 8h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
      
    </Svg>
  );
};

export default MenuBarBurgerIcon;
