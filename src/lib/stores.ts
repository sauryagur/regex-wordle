import { writable, derived } from 'svelte/store';
import wordlist from './wordlist';

export const regexStack = writable([{ id: 0, pattern: '' }]);
export const flavor = writable<'js' | 'pcre'>('js');
export const resultLimit = writable(20);
export const showTips = writable(false);

let idCounter = 1;
export const addRegex = () => {
	regexStack.update(stack => [...stack, { id: idCounter++, pattern: '' }]);
};

export const updateRegex = (index: number, pattern: string) => {
	regexStack.update(stack => {
		const copy = [...stack];
		copy[index] = { ...copy[index], pattern };
		return copy;
	});
};

export const removeRegex = (index: number) => {
	regexStack.update(stack => stack.filter((_, i) => i !== index));
};

export const filteredResults = derived(regexStack, ($stack) => {
	return wordlist.filter(word =>
		$stack.every(({ pattern }) => {
			try {
				return new RegExp(pattern).test(word);
			} catch {
				return false;
			}
		})
	);
});
