export const Anchor = ({ children, className, ...props }) => {
  return (
    <a {...props} className={` ${className}`}>
      {children}
    </a>
  );
};
