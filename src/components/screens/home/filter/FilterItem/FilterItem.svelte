<script lang='ts'>
	import { currentFilter } from '@/store/store';

	export let filter;

	let isActive: boolean = false;

	currentFilter.subscribe((value: string): void => {
		isActive = value === filter.name;
	});

	const clickHandler = (): void => {
		currentFilter.set(filter.name);
	};

</script>

<button
	type='button'
	class='filter'
	class:active={isActive}
	on:click={clickHandler}>
	<span class='icon' style='background-color: {filter.color}'>
			<img
				src={filter.icon}
				alt={filter.name}
				width='30'
			>
	</span>
	<span class='name'>{filter.name}</span>
</button>

<style lang='scss'>
  .filter {
    @apply text-center bg-white rounded-3xl p-2;
    width: 4.5rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
    background-color: transparent;

    &.active {
      background-color: #b2a9a9;
    }

    .icon {
      @apply rounded-3xl flex items-center justify-center p-3;
    }

    .name {
      font-size: 12px;
      @apply mt-2 block;
    }
  }

</style>