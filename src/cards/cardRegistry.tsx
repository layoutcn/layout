import { FlipCard, Props } from "./interactive/FlipCard";
import React, { JSX } from "react";

type Registry = {
  [category: string]: {
    [name: string]: (props: Props) => JSX.Element;
  };
};

export const cardRegistry: Registry = {
  interactive: {
    "flip-card": (props: Props) => <FlipCard {...props} />,
  },
  // add other categories and card names here
};
