import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonVariant = "purple" | "red" | "lightPurple";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  hoverable = false,
  variant,
  ...rest
}) => {
  const variants = {
    purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
    red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
    lightPurple: `text-indigo-700 bg-indigo-100 ${
      hoverable && "hover:bg-indigo-200"
    }`,
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className} ${
        variants[variant ?? "purple"]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
