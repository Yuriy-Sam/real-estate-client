import HomeMain from '@/components/home-main/HomeMain';
import HomeRecept from '@/components/home-recept/HomeRecept';
import Triker from '@/components/triker/Triker';
const trikerItems = ['Real Estate', 'What', 'Hello ', ' Estate'];

const HomePage = () => {
	return (
		<>
			<HomeMain />
			<Triker arr={trikerItems} />
			{/* <Triker arr={trikerItems} speed={1000} /> */}
			<HomeRecept />
		</>
	);
};

export default HomePage;
