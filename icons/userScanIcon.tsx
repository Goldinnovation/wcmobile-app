import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const UserScanIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 50">
    
        <G>
          <Path
            d="M15 38.9c-.3-.4-1-.5-1.4-.2s-.5 1-.2 1.4c3.1 4.1 7.2 6.4 11.6 6.4s8.5-2.3 11.6-6.4c.3-.4.2-1.1-.2-1.4s-1.1-.2-1.4.2c-2.7 3.6-6.3 5.6-10 5.6s-7.3-2-10-5.6zM37.2 37.5c.5.2 1.1.1 1.3-.4 1.3-2.5 2.1-5.3 2.5-8.3.1-.5-.3-1-.9-1.1-.5-.1-1 .3-1.1.9-.4 2.8-1.2 5.4-2.3 7.7-.2.3 0 .9.5 1.2zM18.7 7.5c.8-.5 1.7-1 2.5-1.3.5-.2.8-.7.6-1.3-.2-.5-.8-.8-1.3-.6-1 .4-2 .9-2.9 1.5-.5.3-.6.9-.3 1.4s.9.6 1.4.3zM34.4 36c.4-.6.7-1.2 1-1.8.3-.5.1-1.1-.4-1.3-.5-.3-1.1-.1-1.3.4-.3.6-.6 1.1-.9 1.6s-.2 1.1.3 1.4c.4.3 1 .2 1.3-.3zM31.4 13.1c.4.4 1 .4 1.4-.1.4-.4.4-1 0-1.4-1.2-1.1-2.5-1.9-4-2.5-.5-.2-1.1.1-1.3.6s.1 1.1.6 1.3c1.2.5 2.3 1.2 3.3 2.1z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M31.3 37c-1.1 1-2.2 1.6-3.5 2-.5.2-.8.7-.7 1.2.2.5.7.8 1.2.7 1.5-.5 2.9-1.3 4.2-2.5.4-.4.4-1 .1-1.4-.3-.3-.9-.4-1.3 0zM25 31.1c1.3 0 2.6-.7 3.5-1.9.3-.4.2-1.1-.2-1.4s-1.1-.2-1.4.2c-1.1 1.4-2.8 1.4-3.8 0-.3-.4-1-.5-1.4-.2s-.5 1-.2 1.4c.9 1.3 2.2 1.9 3.5 1.9zM23.1 22c1.1-1.4 2.8-1.4 3.8 0 .3.4 1 .5 1.4.2s.5-1 .2-1.4c-.9-1.2-2.2-1.9-3.5-1.9s-2.6.7-3.5 1.9c-.3.4-.2 1.1.2 1.4s1.1.2 1.4-.2zM2 15.1c.6 0 1-.4 1-1V3.9c0-.5.4-.9.9-.9h10.2c.6 0 1-.4 1-1s-.4-1-1-1H3.9C2.3 1 1 2.3 1 3.9v10.2c0 .6.4 1 1 1zM3.9 49h10.2c.6 0 1-.4 1-1s-.4-1-1-1H3.9c-.5 0-.9-.4-.9-.9V35.9c0-.6-.4-1-1-1s-1 .4-1 1v10.2C1 47.7 2.3 49 3.9 49zM48 34.9c-.6 0-1 .4-1 1v10.2c0 .5-.4.9-.9.9H35.9c-.6 0-1 .4-1 1s.4 1 1 1h10.2c1.6 0 2.9-1.3 2.9-2.9V35.9c0-.6-.4-1-1-1zM46.1 1H35.9c-.6 0-1 .4-1 1s.4 1 1 1h10.2c.5 0 .9.4.9.9v10.2c0 .6.4 1 1 1s1-.4 1-1V3.9C49 2.3 47.7 1 46.1 1z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M48 24h-6.7C40.9 12.6 33.7 3.5 25 3.5c-.6 0-1 .4-1 1s.4 1 1 1c7.6 0 13.9 8.2 14.3 18.5h-1.8c-.1-1.9-.4-3.9-1-5.7-.2-.5-.7-.8-1.3-.6-.5.2-.8.7-.6 1.3.5 1.6.8 3.3.9 5h-1.8c-.5-6.4-4.7-10.2-8.7-10.2-2.4 0-4.6 1.2-6.2 3.4-.3.4-.2 1.1.2 1.4s1.1.2 1.4-.2c1.3-1.7 2.9-2.6 4.6-2.6 3.9 0 6.3 4.3 6.6 8.2h-5.9c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-1 0-1.8.7-2.1 1.7h-8.3c.4-7.5 4.9-13.4 10.4-13.4.6 0 1-.4 1-1s-.4-1-1-1c-6.6 0-12 6.8-12.4 15.4h-1.8c.2-4.8 1.6-9.4 4.2-12.9.3-.4.2-1.1-.2-1.4s-1.1-.2-1.4.2c-2.9 3.8-4.5 8.8-4.6 14.1H2c-.6 0-1 .4-1 1s.4 1 1 1h6.7c0 .6 0 1.2.1 1.9.1.6.5.9 1.1.9.5-.1 1-.5.9-1.1s-.1-1.1-.1-1.7h1.8c.5 8.6 5.9 15.4 12.5 15.4.6 0 1-.4 1-1s-.4-1-1-1c-5.5 0-10.1-5.9-10.4-13.4h1.8c.2 2.6 1 4.9 2.4 6.7v.1c3.3 4.5 9 4.6 12.4 0 1.4-1.9 2.2-4.3 2.4-6.8h1.8c-.1 1.7-.4 3.4-.9 5-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6c.6-1.8 1-3.7 1-5.7H48c.6 0 1-.4 1-1s-.4-1-1-1zm-18.4 7.6c-2.6 3.5-6.6 3.5-9.2 0-1.1-1.5-1.8-3.4-2-5.6h13.2c-.1 2.1-.8 4.1-2 5.6z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default UserScanIcon;
