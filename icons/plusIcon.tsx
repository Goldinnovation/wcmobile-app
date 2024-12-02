import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const PlusIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
  
        <G>
          <Path
            d="M256 2C115.9 2 2 115.9 2 256s113.9 254 254 254 254-113.9 254-254S396.1 2 256 2zm0 457.2C144 459.2 52.8 368 52.8 256S144 52.8 256 52.8 459.2 144 459.2 256 368 459.2 256 459.2z"
            fill="#fcfcfc"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M383 230.6H281.4V129c0-14-11.4-25.4-25.4-25.4S230.6 115 230.6 129v101.6H129c-14 0-25.4 11.4-25.4 25.4s11.4 25.4 25.4 25.4h101.6V383c0 14 11.4 25.4 25.4 25.4s25.4-11.4 25.4-25.4V281.4H383c14 0 25.4-11.4 25.4-25.4S397 230.6 383 230.6z"
            fill="#fcfcfc"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
      
    </Svg>
  );
};

export default PlusIcon;
