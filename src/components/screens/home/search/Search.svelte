<script lang='ts'>
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
	import { searchTerm } from '@/store/store';

</script>

<div class='search'>
	<div class='icon'>
		<IoIosSearch />
	</div>
	<input type='text' placeholder='Search...' bind:value={$searchTerm}>
</div>

<style lang='scss'>
  .search {
    @apply overflow-hidden bg-[#F0F0F0] rounded-3xl py-2 px-3.5 flex flex-row;
	  max-width: 600px;
    margin: 0 auto;

    .icon {
      @apply w-8 mr-2 text-[#BCBCC1];
    }

    input {
      @apply bg-transparent text-[#222];
      outline: none;
      border: none;

      &::placeholder {
        @apply font-normal;
      }
    }
  }
</style>