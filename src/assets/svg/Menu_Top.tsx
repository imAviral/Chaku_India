import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu_Top(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={17}
      viewBox="0 0 25 17"
      fill="none"
      {...props}>
      <Path
        d="M1.599 8.333H13.5M1.6 1h22m-22 14.667h22"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Menu_Top;
