import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const QrCodePlaceholder: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
   
        <G>
          <Path
            d="M160 0H0v160h160V0zm-32 128H32V32h96v96z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M64 64h32v32H64zM352 0v160h160V0H352zm128 128h-96V32h96v96z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M416 64h32v32h-32zM0 512h160V352H0v160zm32-128h96v96H32v-96z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M64 416h32v32H64zM256 0h64v32h-64zM256 128h32V96h32V64h-96V32h-32v64h64zM192 128h32v32h-32zM320 160h-32v32h-96v32h128zM32 288h32v-32H32v-64H0v128h32zM64 192h32v32H64z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M192 320h64v-32h-32v-32h-64v-64h-32v64H96v64h32v-32h64zM288 256h32v64h-32zM288 352h-96v32h64v96h-64v32h96v-32h64v-32h-64z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M192 416h32v32h-32zM320 352h32v64h-32zM480 416h-96v96h32v-64h64z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M448 480h64v32h-64zM480 352h32v32h-32zM384 384h32v-96h-64v32h32zM448 224h-32v-32h-32v32h-32v32h128v-32h32v-32h-64zM448 288h64v32h-64z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
   
    </Svg>
  );
};

export default QrCodePlaceholder;
