const Button = ({ children, textOnly, className, ...props }) => {
  const classes = textOnly ? "text-button" : "button";
  return (
    <button {...props} className={`${className} ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
