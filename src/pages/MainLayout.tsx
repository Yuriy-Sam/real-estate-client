import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<Header />
			<main className=" mt-[70px] flex items-center flex-col">
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
