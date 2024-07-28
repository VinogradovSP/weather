import cl from "./button.module.css";

export const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${cl.button} ${className}`}>
      {children}
    </button>
  );
};
