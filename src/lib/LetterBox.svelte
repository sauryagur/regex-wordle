<script lang="ts">
	export let letter: string = '';
	export let status: 'correct' | 'present' | 'absent' = 'absent';
</script>

<div
	class={`w-10 h-10 flex items-center justify-center rounded font-bold text-lg uppercase
    ${status === 'correct' ? 'bg-green-600 text-white' : ''}
    ${status === 'present' ? 'bg-yellow-500 text-white' : ''}
    ${status === 'absent' ? 'bg-zinc-800 text-gray-500' : ''}`}
>
	{letter}
</div>
