<script lang='ts'>
	import FilterItem from './FilterItem/FilterItem.svelte';
	import hamburger from '@/assets/filters/hamburger.svg';
	import popcorn from '@/assets/filters/popcorn.svg';
	import oldMicrophone from '@/assets/filters/old-microphone.svg';
	import iceCream from '@/assets/filters/ice-cream.svg';
	import type { IFilter } from '@/components/screens/home/filter/filter.interface';

	const filters:IFilter[] = [
		{
			name: 'Cafe',
			icon: hamburger,
			color: '#EAF2FF',
		},
		{
			name: 'Cinema',
			icon: popcorn,
			color: '#E4F6EA',
		},
		{
			name: 'Stand-up',
			icon: oldMicrophone,
			color: '#FEEFEA',
		},
		{
			name: 'Ice cream',
			icon: iceCream,
			color: '#FDF8E2',
		},
	];
</script>

<div class='filters'>
	{#each filters as filter (filter.name)}
		<FilterItem {filter} />
	{/each}
</div>

<style lang='scss'>
  .filters {
    margin: 0 auto;
    max-width: 400px;
    @apply mt-5 flex items-center justify-between;
  }
</style>
