import React from "react";
import { memo } from "react";

/**
 * Defining the default props
 */
export const calendarDefaultProps = {
  width: 24,
  height: 24,
  fillColour: "#8456EC",
};

/**
 * Calendar Icon
 */
const Calendar = (props) => {
  const calendarProps = { ...calendarDefaultProps, ...props };

  const { width, height, fillColour } = calendarProps;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Light-Outline/Calendar">
        <g id="Calendar">
          <path
            id="Fill 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6665 9.9043H2.84253C2.42853 9.9043 2.09253 9.5683 2.09253 9.1543C2.09253 8.7403 2.42853 8.4043 2.84253 8.4043H20.6665C21.0805 8.4043 21.4165 8.7403 21.4165 9.1543C21.4165 9.5683 21.0805 9.9043 20.6665 9.9043Z"
            fill={fillColour}
          />
          <path
            id="Fill 3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2011 13.8096C15.7871 13.8096 15.4471 13.4736 15.4471 13.0596C15.4471 12.6456 15.7781 12.3096 16.1921 12.3096H16.2011C16.6151 12.3096 16.9511 12.6456 16.9511 13.0596C16.9511 13.4736 16.6151 13.8096 16.2011 13.8096Z"
            fill={fillColour}
          />
          <path
            id="Fill 5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7636 13.8096C11.3496 13.8096 11.0096 13.4736 11.0096 13.0596C11.0096 12.6456 11.3406 12.3096 11.7546 12.3096H11.7636C12.1776 12.3096 12.5136 12.6456 12.5136 13.0596C12.5136 13.4736 12.1776 13.8096 11.7636 13.8096Z"
            fill={fillColour}
          />
          <path
            id="Fill 7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.31689 13.8096C6.90289 13.8096 6.56189 13.4736 6.56189 13.0596C6.56189 12.6456 6.89389 12.3096 7.30789 12.3096H7.31689C7.73089 12.3096 8.06689 12.6456 8.06689 13.0596C8.06689 13.4736 7.73089 13.8096 7.31689 13.8096Z"
            fill={fillColour}
          />
          <path
            id="Fill 9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2011 17.6963C15.7871 17.6963 15.4471 17.3603 15.4471 16.9463C15.4471 16.5323 15.7781 16.1963 16.1921 16.1963H16.2011C16.6151 16.1963 16.9511 16.5323 16.9511 16.9463C16.9511 17.3603 16.6151 17.6963 16.2011 17.6963Z"
            fill={fillColour}
          />
          <path
            id="Fill 11"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7636 17.6963C11.3496 17.6963 11.0096 17.3603 11.0096 16.9463C11.0096 16.5323 11.3406 16.1963 11.7546 16.1963H11.7636C12.1776 16.1963 12.5136 16.5323 12.5136 16.9463C12.5136 17.3603 12.1776 17.6963 11.7636 17.6963Z"
            fill={fillColour}
          />
          <path
            id="Fill 13"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.31689 17.6963C6.90289 17.6963 6.56189 17.3603 6.56189 16.9463C6.56189 16.5323 6.89389 16.1963 7.30789 16.1963H7.31689C7.73089 16.1963 8.06689 16.5323 8.06689 16.9463C8.06689 17.3603 7.73089 17.6963 7.31689 17.6963Z"
            fill={fillColour}
          />
          <path
            id="Fill 15"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7935 5.791C15.3795 5.791 15.0435 5.455 15.0435 5.041V1.75C15.0435 1.336 15.3795 1 15.7935 1C16.2075 1 16.5435 1.336 16.5435 1.75V5.041C16.5435 5.455 16.2075 5.791 15.7935 5.791Z"
            fill={fillColour}
          />
          <path
            id="Fill 17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71533 5.791C7.30133 5.791 6.96533 5.455 6.96533 5.041V1.75C6.96533 1.336 7.30133 1 7.71533 1C8.12933 1 8.46533 1.336 8.46533 1.75V5.041C8.46533 5.455 8.12933 5.791 7.71533 5.791Z"
            fill={fillColour}
          />
          <g id="Group 21">
            <mask
              id="mask0_14_903"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={2}
              y={2}
              width={20}
              height={21}
            >
              <path
                id="Clip 20"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2.5791H21.5V22.5H2V2.5791Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_14_903)">
              <path
                id="Fill 19"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.521 4.0791C4.928 4.0791 3.5 5.4621 3.5 7.9731V17.0221C3.5 19.5881 4.928 21.0001 7.521 21.0001H15.979C18.572 21.0001 20 19.6141 20 17.0981V7.9731C20.004 6.7381 19.672 5.7781 19.013 5.1181C18.335 4.4381 17.29 4.0791 15.988 4.0791H7.521ZM15.979 22.5001H7.521C4.116 22.5001 2 20.4011 2 17.0221V7.9731C2 4.6451 4.116 2.5791 7.521 2.5791H15.988C17.697 2.5791 19.11 3.0911 20.075 4.0581C21.012 4.9991 21.505 6.3521 21.5 7.9751V17.0981C21.5 20.4301 19.384 22.5001 15.979 22.5001Z"
                fill={fillColour}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Calendar;

export const CalendarIcon = memo(Calendar);
