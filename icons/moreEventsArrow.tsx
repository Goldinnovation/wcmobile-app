import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const MoreEventsArrow: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 451.111 451.111">
   
        <G>
          <Path
            d="m290 0 56.389 56.389L257.778 145l48.333 48.333 88.611-88.611 56.389 56.389V0zM145 257.778l-88.611 88.611L0 290v161.111h161.111l-56.389-56.389 88.611-88.611zM306.111 257.778l-48.333 48.333 88.611 88.611L290 451.111h161.111V290l-56.389 56.389zM161.111 0H0v161.111l56.389-56.389L145 193.333 193.333 145l-88.611-88.611z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default MoreEventsArrow;
