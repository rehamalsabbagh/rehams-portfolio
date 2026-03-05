import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const defaultStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
};

export default function ButtonLink({
  style,
  ...props
}: LinkProps & { style?: React.CSSProperties }) {
  return <Link {...props} style={{ ...defaultStyle, ...style }} />;
}
