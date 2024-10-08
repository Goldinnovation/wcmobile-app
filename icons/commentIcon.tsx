import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G, Circle } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
  lineColor: string
}

const CommentIcon: React.FC<IconProp> = ({ width, height, lineColor }) => {
  return (
    <Svg
     
      width= {width}
      height= {height}
     
      viewBox="0 0 512 512"
    
    >
      <G>
        <Path
          d="M255.998 451.959H117.336c-8.77 0-16.082-4.1-19.561-10.968-3.478-6.867-2.456-15.189 2.734-22.26l17.427-23.674C80.985 358.36 60.041 308.423 60.041 256c0-108.052 87.906-195.959 195.957-195.959 108.054 0 195.961 87.907 195.961 195.959 0 108.053-87.907 195.959-195.961 195.959zm0-30c91.511 0 165.961-74.448 165.961-165.959 0-91.51-74.45-165.959-165.961-165.959-91.509 0-165.957 74.449-165.957 165.959 0 48.346 21.034 94.196 57.709 125.796l10.524 9.067-22.89 31.096z"
          fill={lineColor}
          opacity="1"
          data-original="#000000"
        ></Path>
        <Path
          d="M203.758 256c0 11.53-9.346 20.878-20.877 20.878C171.348 276.878 162 267.53 162 256c0-11.533 9.348-20.881 20.881-20.881 11.531 0 20.877 9.349 20.877 20.881z"
          fill={lineColor}
          opacity="1"
          data-original="#000000"
        ></Path>
        <Circle
          cx="256.008"
          cy="256"
          r="20.878"
          fill={lineColor}
          opacity="1"
          data-original="#000000"
        ></Circle>
        <Circle
          cx="329.139"
          cy="256"
          r="20.879"
          fill={lineColor}
          opacity="1"
          data-original="#000000"
        ></Circle>
      </G>
    </Svg>
  );
};

export default CommentIcon;
