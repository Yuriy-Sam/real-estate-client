import { ButtonHTMLAttributes, ElementType } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  Icon?: ElementType;
  theme?: "primary" | "secondary";
}

const CustomButton = ({
  Icon,
  title = "",
  theme,
  ...props
}: CustomButtonProps) => {
  const selectTheme = (theme: string | undefined) => {
    switch (theme) {
      case "primary":
        return " py-2 px-4 rounded-3xl  text-secondary-color transition hover:bg-primary-color hover:text-white ";
      case "secondary":
        return " py-2 px-4 rounded-3xl font-medium border-2 text-secondary-color transition hover:bg-primary-color hover:text-white ";
      default:
        return "";
    }
  };
  return (
    <button className={selectTheme(theme)} {...props}>
      {Icon ? <Icon /> : null}
      {title}
    </button>
  );
};

export default CustomButton;
