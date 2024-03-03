import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './homeReview.css';
import { SvgIcon } from '../svg-icon/SVGIcon';
import { preview } from 'vite';
import CustomButton from '../custom-button/custom-button/CustomButton';

type ReviewType = {
	image: string;
	fullName: string;
	job: string;
	comment: string;
};
const reviews: ReviewType[] = [
	{
		image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Bill Gates',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni.'
	},
	{
		image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Robyn Rihanna ',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni.'
	},
	{
		image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Justin Bieber',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, magni.'
	},
	{
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Bill Gates',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni.'
	},
	{
		image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Bill Gates',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni.'
	},
	{
		image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Bill Gates',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni.'
	},
	{
		image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		fullName: 'Bill Gates',
		job: 'Microsoft CEO',
		comment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis aliquid voluptatum ratione nesciunt ad ut ipsa deleniti numquam obcaecati odio repellat beatae maxime fuga, veritatis soluta fugiat illo magni.'
	}
];

const HomeReview = () => {
	return (
		<section className=" w-full h-vh py-10 flex justify-center items-center flex-col">
			<h2 className="text-7xl font-bold text-secondary-color text-center  mb-5">
				What Our Clients Say
			</h2>
			<p className="max-w-[900px] text-2xl text-secondary-color-300 text-center">
				Discover heartfelt accounts of joy and fulfillment as our valued
				clients embark on the quest for their dream homes and prime
				investments
			</p>
			<ReviewSlider reviews={reviews} />
		</section>
	);
};

type ReviewSliderProps = {
	reviews: ReviewType[];
};

const ReviewSlider = ({ reviews }: ReviewSliderProps) => {
	const [activeSlide, setActiveSlide] = useState<number>(0);
	// const handleChangeActiveSlide = (n: number) => {
	// 	// console.log('selectedImage + n ', selectedImage + n);
	// 	if (activeSlide + n > reviews.length - 1) {
	// 		setActiveSlide(0);
	// 	} else if (activeSlide + n === -1) {
	// 		setActiveSlide(reviews.length - 1);
	// 	} else {
	// 		setActiveSlide((prev) => prev + n);
	// 	}
	// };
	const handleChangeActiveSlide = (n: number) => {
		const newIndex = (activeSlide + n + reviews.length) % reviews.length;
		setActiveSlide(newIndex);
	};
	const renderSliderItems = (arr: ReviewType[], length: number) => {
		const startIndex = activeSlide;
		const endIndex = (activeSlide + length) % arr.length;

		const renderedItems = [];

		for (let i = startIndex; i !== endIndex; i = (i + 1) % arr.length) {
			const index = i < 0 ? i + arr.length : i;
			renderedItems.push(
				<motion.li
					key={index}
					initial={{
						// transform:
						// 	i === activeSlide ? 'scale(1.5)' : 'scale(1)',
						opacity: i === activeSlide ? 1 : 0.5,
						width: i === activeSlide ? 300 : 200,
						height: i === activeSlide ? 400 : 200
					}}
					animate={{
						// transform:
						// 	i === activeSlide ? 'scale(1.5)' : 'scale(1)',
						opacity: i === activeSlide ? 1 : 0.5,
						width: i === activeSlide ? 300 : 200,
						height: i === activeSlide ? 400 : 200
					}}
					className={`review-slider__item `}
				>
					<button
						onClick={() => setActiveSlide(index)}
						className=" w-full h-full"
					>
						<img src={arr[index].image} alt={arr[index].fullName} />
					</button>
				</motion.li>
			);
		}

		return renderedItems.reverse();
	};
	return (
		<div className="review-slider">
			<div className=" w-full h-full relative">
				<ul className="review-slider__wrapper ">
					{renderSliderItems(reviews, 4)}
				</ul>
			</div>
			<div className=" flex justify-end flex-col gap-8 h-full w-full p-5">
				<div className="">
					<SvgIcon
						iconName="quote"
						color=" var(--primary-color)"
						size={50}
						className=" mb-4"
					/>
					<p className=" text-2xl font-medium text-secondary-color mb-5">{`"${reviews[activeSlide].comment}"`}</p>{' '}
				</div>

				<div className=" flex justify-between items-center ">
					<div className="">
						<h3 className=" text-3xl font-bold text-secondary-color ">
							{reviews[activeSlide].fullName}
						</h3>
						<p className=" text-xl text-secondary-color-300 ">
							{reviews[activeSlide].job}
						</p>
					</div>
					<div className="">
						<CustomButton
							theme="orange"
							onClick={() => handleChangeActiveSlide(-1)}
							className=" rounded-full px-4 py-4 p-0 mr-1"
						>
							<span className="arrow _md"></span>
						</CustomButton>
						<CustomButton
							theme="orange"
							onClick={() => handleChangeActiveSlide(1)}
							className=" rounded-full px-4 py-4  "
						>
							<span className="arrow _md _right"></span>
						</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeReview;
