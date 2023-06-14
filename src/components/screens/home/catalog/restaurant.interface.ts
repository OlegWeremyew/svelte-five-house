import { CurrentFilterType } from '@/store/store.types';

export interface IRestaurant {
	slug: string;
	name: string;
	priceRating: '$$$$' | '$$$' | '$$' | '$';
	kitchens: string[];
	rating: number;
	destination: number;
	img: string;
	filter: CurrentFilterType[]
}
