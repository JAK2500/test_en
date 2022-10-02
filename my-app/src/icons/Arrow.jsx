import React from "react";
import { memo } from "react";

/**
 * Defining the default props
 */
export const arrowDefaultProps = {
  width: 10,
  height: 16,
  strokeColour: "#BDBDBD",
};

/**
 * Arrow Icon
 */
const Arrow = (props) => {
  const arrowProps = { ...arrowDefaultProps, ...props };

  const { width, height, strokeColour } = arrowProps;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.56763 1L8.56763 8L1.56763 15"
        stroke={strokeColour}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;

export const ArrowIcon = memo(Arrow);
