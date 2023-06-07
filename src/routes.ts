import Home from './components/screens/home/Home.svelte';
import Restaurant from './components/screens/restaurant/Restaurant.svelte';
import NotFound from './components/screens/not-found/NotFound.svelte';

export const routes = {
	'/': Home,
	'/restaurant/:name': Restaurant,
	'*': NotFound,
};
