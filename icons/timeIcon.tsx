import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const TimeIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      
        <G>
          <Path
            fill-rule="evenodd"
            d="M271.358 57.53a226.372 226.372 0 0 1 123.615 46.863l6.575-6.574a15.355 15.355 0 0 1 22.159-21.254l20.811 20.811a15.355 15.355 0 0 1-21.254 22.159L418 124.8a227.49 227.49 0 1 1-324.391.4l-5.667-5.666a15.355 15.355 0 0 1-21.256-22.158L87.5 76.565a15.355 15.355 0 0 1 22.159 21.253l6.922 6.923a226.378 226.378 0 0 1 124.063-47.21V30.715h-23.43a15.358 15.358 0 1 1 0-30.715h77.573a15.358 15.358 0 0 1 0 30.715h-23.429zm-30.716 133.1v93.881A15.358 15.358 0 0 0 256 299.866h76.7a15.358 15.358 0 0 0 0-30.715h-61.342v-78.523a15.358 15.358 0 0 0-30.716 0zm139.966-30.73a176.227 176.227 0 1 0 51.613 124.609A175.673 175.673 0 0 0 380.608 159.9z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default TimeIcon;
