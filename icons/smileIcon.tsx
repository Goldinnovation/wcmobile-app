import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const SmileIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
     
        <G>
          <Path
            d="M16 1.25C7.859 1.25 1.25 7.859 1.25 16S7.859 30.75 16 30.75 30.75 24.141 30.75 16 24.141 1.25 16 1.25zm0 1.5c7.313 0 13.25 5.937 13.25 13.25S23.313 29.25 16 29.25 2.75 23.313 2.75 16 8.687 2.75 16 2.75z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M6 15.848h20a.75.75 0 0 1 .75.75c0 5.359-4.796 9.75-10.75 9.75s-10.75-4.391-10.75-9.75l.001-.038.003-.038.005-.038.006-.037.009-.036.01-.036.012-.034.013-.035.015-.033A.75.75 0 0 1 6 15.848zm19.212 1.5H6.788c.425 4.222 4.409 7.5 9.212 7.5s8.787-3.278 9.212-7.5zM8.75 11.617c0-1.241 1.008-2.25 2.25-2.25s2.25 1.009 2.25 2.25a.75.75 0 0 0 1.5 0c0-2.069-1.68-3.75-3.75-3.75s-3.75 1.681-3.75 3.75a.75.75 0 0 0 1.5 0zM18.75 11.617c0-1.241 1.008-2.25 2.25-2.25s2.25 1.009 2.25 2.25a.75.75 0 0 0 1.5 0c0-2.069-1.68-3.75-3.75-3.75s-3.75 1.681-3.75 3.75a.75.75 0 0 0 1.5 0z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default SmileIcon;
