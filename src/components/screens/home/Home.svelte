<script lang='ts'>
	import { link } from 'svelte-spa-router';
	import Search from './search/Search.svelte';
	import Filter from './filter/Filter.svelte';
</script>
<div>
	<Search />
		<Filter />
	<a href='/company/soho' use:link>company</a>
</div>

<style lang='postcss'>

</style>