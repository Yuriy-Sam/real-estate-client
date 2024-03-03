import { ButtonHTMLAttributes, ElementType } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	Icon?: ElementType;
	theme?: 'primary' | 'secondary' | 'orange';
}

const CustomButton = ({
	Icon,
	title = '',
	theme,
	children,
	className,
	...props
}: CustomButtonProps) => {
	const selectTheme = (theme: string | undefined) => {
		switch (theme) {
			case 'primary':
				return ' py-2 px-4 rounded-3xl  text-secondary-color transition hover:bg-primary-color hover:text-white ';
			case 'secondary':
				return ' py-2 px-4 rounded-3xl font-medium border-2 text-secondary-color transition hover:bg-primary-color hover:text-white ';
			case 'orange':
				return ' py-2 px-4 rounded-3xl font-medium border-2    opacity-80 hover:opacity-100  transition bg-primary-color text-white ';
			default:
				return '';
		}
	};
	return (
		<button className={selectTheme(theme) + ' ' + className} {...props}>
			{Icon ? <Icon /> : null}
			{title ? title : ''}
			{children}
			<div className=""></div>
		</button>
	);
};

export default CustomButton;
