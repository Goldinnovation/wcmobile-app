import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const UserScanIcon: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
  
        <G>
          <G fill="#000">
            <Path
              d="M20.163 15.273a.806.806 0 0 0-.816.818v2.045c0 .716-.612 1.228-1.225 1.228h-2.04a.806.806 0 0 0-.817.818c0 .511.306.818.817.818h2.04a2.855 2.855 0 0 0 2.857-2.864v-2.045c0-.41-.408-.818-.816-.818zM16.082 4.636h2.04c.715 0 1.225.614 1.225 1.228v2.045c0 .41.306.818.816.818s.817-.306.817-.818V5.864C20.98 4.33 19.755 3 18.122 3h-2.04a.806.806 0 0 0-.817.818c0 .512.409.818.817.818zM7.918 19.364h-2.04c-.715 0-1.225-.614-1.225-1.228v-2.045c0-.41-.306-.818-.816-.818s-.817.409-.817.818v2.045C3.02 19.671 4.245 21 5.878 21h2.04a.806.806 0 0 0 .817-.818.806.806 0 0 0-.817-.818zM3.837 8.727a.806.806 0 0 0 .816-.818V5.864c0-.716.612-1.228 1.225-1.228h2.04a.806.806 0 0 0 .817-.818A.806.806 0 0 0 7.918 3h-2.04C4.347 3 3.02 4.33 3.02 5.864v2.045c0 .41.409.818.817.818z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
            ></Path>
            <Path
              d="M16.082 18.136a2.05 2.05 0 0 0 2.04-2.045v-1.84H5.879v1.84a2.05 2.05 0 0 0 2.04 2.045zM21.184 11.182h-3.061V7.909a2.05 2.05 0 0 0-2.041-2.045H7.918a2.05 2.05 0 0 0-2.04 2.045v3.478H2.816a.806.806 0 0 0-.816.818c0 .511.306.818.816.818h18.368a.806.806 0 0 0 .816-.818c0-.512-.408-1.023-.816-1.023z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
            ></Path>
          </G>
        </G>
    </Svg>
  );
};

export default UserScanIcon;
