import { memo, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import './triker.css';
type Props = {
	arr: string[];
};

const Triker = memo(({ arr }: Props) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const renderTrikerItems = useMemo(() => {
		return arr.map((item, i) => (
			<li
				className="flex justify-center items-center uppercase text-light-color"
				key={i}
			>
				<p>{item}</p>
				<span className="w-8 h-8 rotate-45 bg-light-color block rounded-md mx-10"></span>
			</li>
		));
	}, [arr]);
	return (
		<section className="relative max-w-[100%] overflow-hidden w-screen bg-primary-color   h-32  ">
			<ul
				// className="absolute top-1/2 flex items-center text-4xl font-bold text-nowrap transition-transform ease-linear  "
				className="ticker_container "
				// style={{
				// 	transform: `translate(-${scrollPosition}px, -50%)`
				// }}
			>
				{renderTrikerItems}
				{renderTrikerItems}
				{renderTrikerItems}
			</ul>
		</section>
	);
});

export default Triker;
