import React from "react";

export default function({ src, ...props }) {
  return <img alt={"img"} {...props} src={process.env.PUBLIC_URL + src} />;
}
