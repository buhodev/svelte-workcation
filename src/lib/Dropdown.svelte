<script>
	export let buttonHasFocus = false;
	export let isOpen = false;
	let className;
	export { className as class };

	function toggle() {
		isOpen = !isOpen;
	}

	function onEscape(e) {
		if (!isOpen || e.key !== 'Escape') {
			return;
		}
		isOpen = false;
	}
</script>

<svelte:window on:keydown={onEscape} />

<div class="relative {className}">
	<button
		on:click={toggle}
		type="button"
		class="block focus:outline-none"
		on:focus={() => (buttonHasFocus = true)}
		on:blur={() => (buttonHasFocus = false)}
	>
		<slot name="trigger" hasFocus={buttonHasFocus} {isOpen} />
	</button>
	<div class={isOpen ? 'block' : 'hidden'}>
		<button
			on:click={() => (isOpen = false)}
			type="button"
			class="fixed inset-0 z-30 block h-full w-full cursor-default"
		/>
		<div class="absolute right-0 z-40">
			<slot name="dropdown" />
		</div>
	</div>
</div>
