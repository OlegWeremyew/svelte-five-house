import { Writable, writable } from 'svelte/store';
import { CurrentFilterType } from '@/store/store.types';

export const currentFilter: Writable<CurrentFilterType> = writable('');
export const searchTerm: Writable<string> = writable('');
