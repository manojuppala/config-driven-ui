import { useState } from "react";
import { userConfig } from "./config";
import { CustomElementRenderer } from "./CustomElementRenderer.jsx";

const FormA = () => {
  const [state, setState] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <h1>Form A ❤️</h1>
      <form onSubmit={handleFormSubmit}>
        {Object.keys(userConfig).map((field, key) => {
          return (
            <CustomElementRenderer
              key={Math.random() * key}
              obj={userConfig[field]}
              value={state[field]}
              onChangeFunc={handleOnChange}
            />
          );
        })}
      </form>
    </div>
  );
};
export default FormA;
