import { Input } from "./components";

export const CustomElementRenderer = ({ obj, onChangeFunc, value = null }) => {
  switch (obj.component) {
    case "label":
      return <label>{obj.label}</label>;
    case "input":
      return (
        <div style={{ display: "flex" }}>
          <label htmlFor="name" className="text-light" style={{ margin: "10px" }}>
            {obj.label}
          </label>
          <Input
            id={obj.id}
            placeholder={obj.placeholder}
            name={obj.name}
            type={obj.type}
            defaultValue={obj.defaultValue}
            value={null}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
          />
        </div>
      );
    case "textArea":
      return (
        <div>
          <label>{obj.label}</label>
          <textarea
            disabled={obj.disabled}
            cols={obj.cols}
            rows={obj.rows}
            name={obj.name}
            className={obj.className}
            defaultValue={obj.defaultValue}
            placeholder={obj.placeholder}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
          />
        </div>
      );
    case "submit":
      return (
        <p style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary btn-sm">
            Submit
          </button>
        </p>
      );
    case "dropdown":
      return (
        <div>
          <label style={{ margin: "10px" }}>{obj.label}</label>
          <select
            style={{ margin: "10px" }}
            className={`${obj.className} text-light bg-dark`}
            value={obj.value}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
          >
            {(obj.options || []).map((option, id) => (
              <option value={option.value} key={id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    case "checkbox":
      return (
        <>
          {" "}
          <input
            class={obj.className}
            type={obj.type}
            value=""
            id="flexCheckChecked"
            checked={obj.checked}
          />
          <label class="form-check-label" for="flexCheckChecked">
            {obj.label}
          </label>
        </>
      );
    case "radio":
      return (
        <div>
          <label>{obj.label}</label>
          <input
            name={obj.name}
            type={"radio"}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
            checked={this.props.checked}
          >
            {obj.label}
          </input>
        </div>
      );
    case "image":
      return (
        <div>
          <img alt={obj.alt} src={obj.src} target={obj.target} />
          <label>{obj.label}</label>
        </div>
      );
    case "hyperlink":
      return (
        <a href={obj.href} target={obj.target}>
          {obj.label}
        </a>
      );
    default:
      return <span>Component not found.</span>;
  }
};
