import React from "react";
import "./emptyPlaceholderIcon.css";

type Props = {
  className?: string;
  width?: number | string;
};

export function EmptyPlaceholderIcon({ width, className }: Props) {
  return (
    <svg
      width={width}
      className={`${className} emptyPlaceholderIcon`}
      viewBox="0 0 178 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="27"
        y="50.5"
        width="124"
        height="39"
        rx="7.5"
        fill="currentColor"
        className="g3njg dark:fill-neutral-800"
      ></rect>
      <rect
        x="27"
        y="50.5"
        width="124"
        height="39"
        rx="7.5"
        stroke="currentColor"
        className="ir0tw dark:stroke-neutral-700/10"
      ></rect>
      <rect
        x="34.5"
        y="58"
        width="24"
        height="24"
        rx="4"
        fill="currentColor"
        className="q1q6p dark:fill-neutral-700/30"
      ></rect>
      <rect
        x="66.5"
        y="61"
        width="60"
        height="6"
        rx="3"
        fill="currentColor"
        className="q1q6p dark:fill-neutral-700/30"
      ></rect>
      <rect
        x="66.5"
        y="73"
        width="77"
        height="6"
        rx="3"
        fill="currentColor"
        className="q1q6p dark:fill-neutral-700/30"
      ></rect>
      <rect
        x="19.5"
        y="28.5"
        width="139"
        height="39"
        rx="7.5"
        fill="currentColor"
        className="g3njg dark:fill-neutral-800"
      ></rect>
      <rect
        x="19.5"
        y="28.5"
        width="139"
        height="39"
        rx="7.5"
        stroke="currentColor"
        className="byl25 dark:stroke-neutral-700/30"
      ></rect>
      <rect
        x="27"
        y="36"
        width="24"
        height="24"
        rx="4"
        fill="currentColor"
        className="m1d7o dark:fill-neutral-700/70"
      ></rect>
      <rect
        x="59"
        y="39"
        width="60"
        height="6"
        rx="3"
        fill="currentColor"
        className="m1d7o dark:fill-neutral-700/70"
      ></rect>
      <rect
        x="59"
        y="51"
        width="92"
        height="6"
        rx="3"
        fill="currentColor"
        className="m1d7o dark:fill-neutral-700/70"
      ></rect>
      <g filter="url(#filter19)">
        <rect
          x="12"
          y="6"
          width="154"
          height="40"
          rx="8"
          fill="currentColor"
          className="g3njg dark:fill-neutral-800"
          shapeRendering="crispEdges"
        ></rect>
        <rect
          x="12.5"
          y="6.5"
          width="153"
          height="39"
          rx="7.5"
          stroke="currentColor"
          className="byl25 dark:stroke-neutral-700/60"
          shapeRendering="crispEdges"
        ></rect>
        <rect
          x="20"
          y="14"
          width="24"
          height="24"
          rx="4"
          fill="currentColor"
          className="ylane dark:fill-neutral-700 "
        ></rect>
        <rect
          x="52"
          y="17"
          width="60"
          height="6"
          rx="3"
          fill="currentColor"
          className="ylane dark:fill-neutral-700"
        ></rect>
        <rect
          x="52"
          y="29"
          width="106"
          height="6"
          rx="3"
          fill="currentColor"
          className="ylane dark:fill-neutral-700"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter19"
          x="0"
          y="0"
          width="178"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="6"></feOffset>
          <feGaussianBlur stdDeviation="6"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1187_14810"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1187_14810"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
