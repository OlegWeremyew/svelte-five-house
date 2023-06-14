<script lang='ts'>
	import type { IRestaurant } from '@/components/screens/home/catalog/restaurant.interface';
	import CatalogItem from '@/components/screens/home/catalog/CatalogItem.svelte';
	import kitchen1 from '@/assets/restaurants/kitchen1.png';
	import kitchen2 from '@/assets/restaurants/kitchen2.png';
	import kitchen3 from '@/assets/restaurants/kitchen3.png';
	import { currentFilter, searchTerm } from '@/store/store';

	const initialRestaurants: IRestaurant[] = [
		{
			slug: 'the-james-soho',
			name: 'The James SoHo',
			priceRating: '$$$',
			kitchens: ['Italian', 'Japanese'],
			rating: 4.7,
			destination: 1,
			img: kitchen1,
			filter: ['Cafe', 'Stand-up']
		},
		{
			slug: 'vegan-cafe',
			name: 'Vegan cafe',
			priceRating: '$$',
			kitchens: ['Vegan'],
			rating: 4.2,
			destination: 2.1,
			img: kitchen2,
			filter: ['Cinema']
		},
		{
			slug: 'arizona',
			name: 'Arizona',
			priceRating: '$$',
			kitchens: ['Chinese', 'Asia'],
			rating: 4.2,
			destination: 2.1,
			img: kitchen3,
			filter: ['Cafe', 'Stand-up', 'Ice cream']
		},
	];

	let filteredRestaurants = [];

	$:if ($searchTerm) {
		filteredRestaurants = initialRestaurants
			.filter(({ name }) => name.toLowerCase().includes($searchTerm.toLowerCase()));
	} else {
		filteredRestaurants = initialRestaurants
	}

	$:if ($currentFilter) {
		filteredRestaurants = initialRestaurants
			.filter(({ filter }) => filter.flat().includes($currentFilter));
	} else {
		filteredRestaurants = initialRestaurants
	}
</script>

<div class='catalogs'>
	{#each filteredRestaurants as restaurant, index (restaurant.name)}
		<CatalogItem {restaurant} />
	{/each}
</div>


<style lang='scss'>
  .catalogs {
    margin: 0 auto;
    max-width: 430px;

    @apply mt-8;
  }
</style>
