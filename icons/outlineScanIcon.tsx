import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const OutlineScanIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
      
        <G>
          <G data-name="Layer 2">
            <Path
              d="M3 11a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h5.5a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v5a1 1 0 0 0 1 1zM27 2h-5.5a1 1 0 0 0 0 2H27a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3zM29 21a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1h-5.5a1 1 0 0 0 0 2H27a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1zM10.5 28H5a1 1 0 0 1-1-1v-5a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h5.5a1 1 0 0 0 0-2zM29 15H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
            ></Path>
          </G>
        </G>
    </Svg>
  );
};

export default OutlineScanIcon;
