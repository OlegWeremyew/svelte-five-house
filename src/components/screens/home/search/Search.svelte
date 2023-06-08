<script lang='ts'>
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
	import { searchTerm } from '@/store/store';

	let term = '';
	const onKeyPress = (event) => {
		if ((event.key === 'Enter' || event.charCode === 13) && term.trim()) {
			searchTerm.set(term);
		}
	};
	const clearTerm = () => {
		term = '';
		searchTerm.set(term);
	}
</script>

<div class='search'>
	<div class='icon'>
		<IoIosSearch />
	</div>
	<input
		type='text'
		placeholder='Search...'
		bind:value={term}
		on:keypress={onKeyPress}
	>
	<div
		class='close'
		on:click={clearTerm}
	>
		X
	</div>
</div>

<style lang='scss'>
  .search {
    @apply overflow-hidden bg-[#F0F0F0] rounded-3xl py-2 px-3.5 flex flex-row relative;
    max-width: 600px;
    margin: 0 auto;

    .icon {
      @apply w-8 mr-2 text-[#BCBCC1];
    }

    input {
      @apply bg-transparent text-[#222] w-full;
      outline: none;
      border: none;

      &::placeholder {
        @apply font-normal;
      }
    }

	  .close{
      position: absolute;
      right: 20px;
      top: 50%;
		  transform: translateY(-50%);
	  }
  }
</style>
