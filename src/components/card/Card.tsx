import React, {
	ComponentProps,
	ReactElement,
	ReactNode,
	useState
} from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { CardType } from '@/types/types';
import { BathRoomIcon, SvgIcon } from '../svg-icon/SVGIcon';

type CardProps = {
	data: CardType;
};

const renderBenefits = (info: CardType['info']) => {
	const benefits: ReactElement[] = [];
	for (const [i, item] of info.entries()) {
		if (item.type === 'size') {
			benefits.unshift(
				<li key={i} className="card_benefits">
					<SvgIcon iconName={item.type} size={15} />
					<p>
						{item.value}m<sup>3</sup>
					</p>
				</li>
			);
		} else {
			benefits.push(
				<li key={i} className=" card_benefits">
					<p>{item.value}</p>
					<SvgIcon iconName={item.type} size={15} />
				</li>
			);
		}
	}

	return benefits;
};
const Card = ({ data, ...props }: CardProps) => {
	const [selectedImage, setSelectedImage] = useState(0);

	const { id, title, address, info, price, images } = data;

	const handleChangeImages = (n: number) => {
		// console.log('selectedImage + n ', selectedImage + n);
		if (selectedImage + n > images.length - 1) {
			setSelectedImage(0);
		} else if (selectedImage + n === -1) {
			setSelectedImage(images.length - 1);
		} else {
			setSelectedImage((prev) => prev + n);
		}
	};
	return (
		<div
			className="card block relative max-w-[420px] w-full min-w-[300px] h-[500px] z-[1] rounded-lg overflow-hidden"
			{...props}
		>
			<div className="card_controlers">
				<button
					onClick={() => handleChangeImages(-1)}
					className="card_control"
				>
					<span className="arrow"></span>
				</button>
				<Link to={`/builder/${id}`} className=" w-full h-full" />
				<button
					onClick={() => handleChangeImages(1)}
					className="card_control transform rotate-180"
				>
					<span className="arrow"></span>
				</button>
			</div>

			<img
				className=" w-full h-full object-cover absolute top-0 left-0 -z-[1]"
				src={images[selectedImage]}
				alt=""
			/>
			{/* <div className="card_wrapper"> */}
			<div className="card_content">
				<div className=" flex items-center gap-1 text-sm text-gray-color  ">
					{/* <SvgIcon
						iconName="marker"
						size={15}
						color="var(--gray-color)"
					/> */}
					<p>{address}</p>
				</div>
				<Link
					to={`/builder/${id}`}
					className=" text-2xl font-bold inline-block hover:underline  mb-4"
				>
					{title}
				</Link>
				<div className=" flex justify-between items-end">
					<ul className="flex items-center gap-2">
						{renderBenefits(info)}
					</ul>
					<p className=" text-primary-color font-bold text-3xl">
						{price}$
					</p>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default Card;
