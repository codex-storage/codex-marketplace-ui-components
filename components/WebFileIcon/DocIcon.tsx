import React from "react";

type Props = {
  size?: number;
};

export const DocIcon = ({ size }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 1024 1024">
    <path
      fill="#5895FF"
      d="m594.944 0 335.124 341.32v563.2c0 65.996-52.5 119.48-117.294 119.48H209.546c-64.793 0-117.299-53.53-117.299-119.48V119.48C92.252 53.484 144.757 0 209.551 0h385.393z"
    />
    <path
      fill="#FFF"
      fillOpacity={0.4}
      d="M930.068 341.32H718.152c-64.748 0-123.208-59.49-123.208-125.492V0l335.124 341.32z"
    />
    <path
      fill="#FFF"
      d="M427.377 725.32V768H259.814v-42.68h167.563zM594.944 640v42.68h-335.13V640h335.13zm0-85.32v42.64h-335.13v-42.64h335.13zm0-85.36V512h-335.13v-42.68h335.13z"
    />
  </svg>
);
