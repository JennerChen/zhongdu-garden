import React, { useState, createContext, useContext } from "react";

const FormContext = createContext({
  name: "",
  tel: ""
});

export const UserName = function(props) {
  const { name, setName } = useContext(FormContext);

  return (
    <input
      {...props}
      value={name}
      onChange={({ target: { value } }) => setName(value)}
    />
  );
};

export const Tel = function(props) {
  const { tel, setTel } = useContext(FormContext);

  return (
    <input
      {...props}
      value={tel}
      onChange={({ target: { value } }) => setTel(value)}
    />
  );
};

export const Submit = function({ onClick, ...props }) {
  const { tel, name } = useContext(FormContext);

  const _onclick = () => console.log(tel, name);
  onClick = onClick ? onClick : _onclick;

  return <a {...props} onClick={onClick} />;
};

export const Form = function({ children, restProps }) {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        tel: tel,
        setTel
      }}
    >
      <form {...restProps}>{children}</form>
    </FormContext.Provider>
  );
};
