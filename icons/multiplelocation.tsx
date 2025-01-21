import { Svg, Path, G } from "react-native-svg";

interface IconProp {
  width: string;
  height: string;
}

const MultiLocation: React.FC<IconProp> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
   
        <G>
          <Path
            d="M386.493 196.306c-3.411-69.072-60.59-124.26-130.59-124.26-69.895 0-126.986 55.181-130.398 124.248-48.409-2.217-90.533 37.118-90.533 87.176 0 46.279 78.508 149.408 81.85 153.772a6.903 6.903 0 0 0 5.481 2.712h.003a6.9 6.9 0 0 0 5.481-2.705c2.178-2.842 36.144-47.434 59.664-91.007 30.16 47.919 60.454 87.719 62.968 91a6.903 6.903 0 0 0 5.481 2.712h.003a6.9 6.9 0 0 0 5.481-2.705c2.519-3.287 32.878-43.112 63.096-91.053 23.487 43.586 57.43 88.208 59.604 91.046a6.903 6.903 0 0 0 5.481 2.712h.003a6.9 6.9 0 0 0 5.481-2.705c3.349-4.371 81.982-107.499 81.982-153.778-.002-49.034-40.84-89.119-90.538-87.165zm-10.988 53.966c24.351-10.643 50.452 7.838 50.452 33.225 0 20.054-16.31 36.364-36.36 36.364-16.361 0-30.067-10.971-34.583-25.907 7.962-14.976 15.05-29.787 20.491-43.682zM156.963 294.01c-4.542 14.906-18.256 25.85-34.627 25.85-20.013 0-36.293-16.31-36.293-36.364 0-25.484 26.15-43.857 50.438-33.205 5.438 13.906 12.523 28.731 20.482 43.719zm-34.654 127.542C97.601 388.116 48.786 315.449 48.786 283.47c0-42.778 36.332-75.587 76.802-73.395.753 7.346 2.583 15.456 5.242 24.091-31.26-5.361-58.601 18.898-58.601 49.331 0 27.669 22.479 50.178 50.107 50.178 18.302 0 34.121-9.976 42.841-24.675a846.646 846.646 0 0 0 13.81 23.56c-16.461 31.989-41.223 68.105-56.678 88.992zm133.597-.02C232.098 389.404 138.99 260.078 138.99 202.777c0-64.464 52.448-116.916 116.912-116.916 64.572 0 117.104 52.451 117.104 116.916.001 57.287-93.266 186.634-117.1 218.755zm133.664.02c-15.422-20.87-40.178-56.99-56.645-88.989a849.456 849.456 0 0 0 13.786-23.479c8.748 14.666 24.621 24.592 42.887 24.592 27.666 0 50.175-22.509 50.175-50.178 0-30.614-27.589-54.656-58.609-49.345 2.66-8.627 4.492-16.73 5.246-24.072 40.626-2.154 76.807 30.79 76.807 73.39-.003 31.958-48.902 104.638-73.647 138.081z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
          <Path
            d="M255.946 129.402c-40.478 0-73.412 32.937-73.412 73.415 0 40.539 32.934 73.523 73.412 73.523 40.539 0 73.52-32.984 73.52-73.523 0-40.478-32.981-73.415-73.52-73.415zm0 133.124c-32.863 0-59.598-26.785-59.598-59.709 0-32.863 26.735-59.601 59.598-59.601 32.92 0 59.706 26.738 59.706 59.601 0 32.924-26.786 59.709-59.706 59.709z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></Path>
        </G>
    </Svg>
  );
};

export default MultiLocation;
