import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const ExploreEventFilter: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg
     
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 64 64"
     
    >
      <G>
        <G fill="#000">
          <Path
            d="M12 18h26.341a6.003 6.003 0 0 0 11.318 0H52a2 2 0 1 0 0-4h-2.341a6.003 6.003 0 0 0-11.318 0H12a2 2 0 1 0 0 4zM12 30a2 2 0 1 0 0 4h14.341a6.003 6.003 0 0 0 11.318 0H52a2 2 0 1 0 0-4H37.659a6.003 6.003 0 0 0-11.318 0zM10 48a2 2 0 0 1 2-2h26.341a6.003 6.003 0 0 1 11.318 0H52a2 2 0 1 1 0 4h-2.341a6.003 6.003 0 0 1-11.318 0H12a2 2 0 0 1-2-2z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
      </G>
    </Svg>
  );
};

export default ExploreEventFilter;
