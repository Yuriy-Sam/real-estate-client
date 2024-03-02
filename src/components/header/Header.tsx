import logo from '@/assets/icons/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button/CustomButton';

type NavLinkType = {
	link: string;
	title: string;
};

const navLinks: NavLinkType[] = [
	{ link: '/', title: 'Home' },
	{ link: '/about', title: 'About Us' },
	{ link: '/contact', title: 'Contacts' },
];

const Header = () => {
	console.log('header');
	const renderNavLinks = (arr: NavLinkType[]) => {
		return arr.map((link, i) => {
			return (
				<li key={i}>
					<NavLink
						className={({ isActive, isPending }) =>
							isPending
								? 'text-dark-color'
								: isActive
								? ' text-dark-color font-bold'
								: ''
						}
						to={link.link}
					>
						{link.title}
					</NavLink>
				</li>
			);
		});
	};

	return (
		<header className=" fixed top-0 left-0 h-[70px] w-screen px-5 flex items-center justify-between bg-light-color z-50">
			<div className="  flex justify-center items-end">
				<img className="w-10 mr-3" src={logo} alt="logo" />
				<p className=" text-xl font-medium text-primary-color">
					Real Estate
				</p>
			</div>
			<nav>
				<ul className=" flex items-center justify-center gap-8 text-secondary-color">
					{renderNavLinks(navLinks)}
				</ul>
			</nav>
			<div className=" flex gap-2">
				<NavLink to="/login">
					<CustomButton theme="primary" title="Login" />
				</NavLink>
				<NavLink to="/signup">
					<CustomButton theme="secondary" title="Sign Up" />
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
