import { Svg, Path, G, ClipPath, Defs } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const SwitchIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 128 128">
        <G>
          <Path
            d="m119.48 79.65-32-35A2 2 0 0 0 84 46v16H42a2 2 0 0 0-2 2v12.85L12.71 47 40 17.15V30a2 2 0 0 0 2 2h56a2 2 0 0 0 0-4H44V12a2 2 0 0 0-3.48-1.35l-32 35a2 2 0 0 0 0 2.7l32 35A2 2 0 0 0 44 82V66h42a2 2 0 0 0 2-2V51.15L115.29 81 88 110.85V98a2 2 0 0 0-2-2H30a2 2 0 0 0 0 4h54v16a2 2 0 0 0 1.28 1.86 1.81 1.81 0 0 0 .72.14 2 2 0 0 0 1.48-.65l32-35a2 2 0 0 0 0-2.7z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default SwitchIcon;
