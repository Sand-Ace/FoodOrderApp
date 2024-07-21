const Input = ({ label, id, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} type="text" name={id} required />
    </p>
  );
};

export default Input;
