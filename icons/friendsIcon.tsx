import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const FriendsIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height}  viewBox="0 0 32 32">
   
   
        <G>
          <Path
            d="M16.095 8.14C15.845.28 4.448.283 4.2 8.14c.25 7.862 11.647 7.86 11.895 0zm-9.762 0c.132-5.029 7.497-5.028 7.629 0-.132 5.031-7.498 5.03-7.629 0zM22.745 15.631c3.014 0 5.467-2.452 5.467-5.466s-2.453-5.467-5.467-5.467-5.467 2.452-5.467 5.467 2.452 5.466 5.467 5.466zm0-8.8c1.838 0 3.334 1.495 3.334 3.334s-1.496 3.333-3.334 3.333-3.334-1.495-3.334-3.333 1.496-3.334 3.334-3.334z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M22.74 16.154a9.168 9.168 0 0 0-5.385 1.749c-1.91-1.934-4.482-2.996-7.212-2.996C4.55 14.907 0 19.457 0 25.05v3.637c0 .589.477 1.067 1.067 1.067h29.865c.59 0 1.066-.478 1.066-1.067v-3.274c.102-4.974-4.281-9.362-9.258-9.259zM2.133 25.05c.374-10.612 15.688-10.594 16.032 0v2.57H2.133zm27.732 2.57h-9.567c-.009-.934.05-2.997-.093-3.892-.178-1.487-.717-2.905-1.514-4.167a7.046 7.046 0 0 1 4.05-1.273c3.828-.08 7.203 3.298 7.124 7.125v2.207z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default FriendsIcon;
