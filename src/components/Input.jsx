function Input({ type, id, placeholder }) {
  return (
    <input
      className="form-control text-light bg-dark input-query mb-3"
      type={type}
      id={id}
      placeholder={placeholder}
      style={{ margin: "10px" }}
    />
  );
}

export default Input;
