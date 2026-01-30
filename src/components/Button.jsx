const Button = ({
  children,
  href,
  onClick,
  type = "button",
  target = "_self",
  variant = "primary",
  size = "normal",
}) => {
  const baseClasses =
    "rounded-lg font-semibold hover:scale-105 transition-transform cursor-pointer";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600  ",
    secondary:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  const sizes = {
    normal: "px-6 py-3",
    small: "px-1.5 py-1 md:px-2.5 md:py-1.5",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`;
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  // bouton
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
