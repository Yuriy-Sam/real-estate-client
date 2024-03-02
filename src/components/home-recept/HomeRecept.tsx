import React from 'react';
import Card from '../card/Card';
import { CardType } from '@/types/types';

const testCart: CardType = {
	id: '234234',
	type: 'house',
	address: 'Dnipro, Ukraine',
	title: '3 Rooms House, with kitchen',
	price: 3500,
	views: 0,
	images: [
		'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1581974206967-93856b25aa13?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://media.istockphoto.com/id/1255201578/photo/spacious-living-room-with-balcony.jpg?s=2048x2048&w=is&k=20&c=9hxCey3ZiB5ofWHTCfjJoNgFuIf62XXbuX81nvE2Zi0=',

		'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	],
	info: [
		{ type: 'bedroom', value: 5 },
		{ type: 'bathroom', value: 5 },
		{ type: 'size', value: 1200 },
		{ type: 'garage', value: 1 }
	]
};

const HomeRecept = () => {
	return (
		<section className=" bg-dark-color h-full w-full  p-16">
			<h2 className=" text-7xl font-bold text-light-color mb-16">
				Best Property
			</h2>
			<ul className="flex justify-between  gap-5 items-center w-full h-full ">
				<Card data={testCart} />
				<Card data={testCart} />
				<Card data={testCart} />{' '}
			</ul>
		</section>
	);
};

export default HomeRecept;
