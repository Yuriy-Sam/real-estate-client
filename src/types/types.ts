export interface CardType {
	id: string;
	type: 'house' | 'apartment';
	images: string[];
	title: string;
	price: number;
	address: string;
	info: { type: infoType; value: string | number; title?: string }[];
	views?: number;
	createAt?: Date;
	updateAt?: Date;
}
export type infoType = 'bedroom' | 'bathroom' | 'size' | 'garage';

export type UserType = {
	id: string;
	avatar: string;
	email: string;
	fullname: string;
	username: string;
	gender: 'male' | 'female';
	favoriteItems: string[];
	createdPosts: string[];
};
