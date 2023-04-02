import { useState } from "react";
import { userConfig } from "./config";
import { Input } from "./components";

const FormB = () => {
  const [state, setState] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Form B 🤮</h1>
      <form onSubmit={handleFormSubmit}>
        <div style={{ display: "flex" }}>
          <label htmlFor="name" className="text-light" style={{ margin: "10px" }}>
            Name:
          </label>
          <Input type="text" id="name" placeholder="What's your name?" />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="email" className="text-light" style={{ margin: "10px" }}>
            Password:
          </label>
          <Input type="password" id="password" placeholder="What's your password?" />
        </div>
        <p style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary btn-sm">
            Submit
          </button>
        </p>
      </form>
    </div>
  );
};
export default FormB;
