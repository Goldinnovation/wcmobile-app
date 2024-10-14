import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const PersonalIcon : React.FC<IconProp>  =({width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
     
        <G>
          <Path
            d="M256 288.389c-153.837 0-238.56 72.776-238.56 204.925 0 10.321 8.365 18.686 18.686 18.686h439.747c10.321 0 18.686-8.365 18.686-18.686.001-132.142-84.722-204.925-238.559-204.925zM55.492 474.628c7.35-98.806 74.713-148.866 200.508-148.866s193.159 50.06 200.515 148.866H55.492zM256 0c-70.665 0-123.951 54.358-123.951 126.437 0 74.19 55.604 134.54 123.951 134.54s123.951-60.35 123.951-134.534C379.951 54.358 326.665 0 256 0zm0 223.611c-47.743 0-86.579-43.589-86.579-97.168 0-51.611 36.413-89.071 86.579-89.071 49.363 0 86.579 38.288 86.579 89.071 0 53.579-38.836 97.168-86.579 97.168z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default PersonalIcon;
