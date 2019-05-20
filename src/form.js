import React, { useState } from "react";

export const UserName = function(props) {
  const [name, setName] = useState("");

  return (
    <input
      {...props}
      value={name}
      onChange={({ target: { value } }) => setName(value)}
    />
  );
};

export const Tel = function(props) {
  const [tel, setTel] = useState("");

  return (
    <input
      {...props}
      value={tel}
      onChange={({ target: { value } }) => setTel(value)}
    />
  );
};

export const Submit = function(props) {
  return <a {...props} />;
};
