<script>
  export let buttonHasFocus = false;
  export let isOpen = false;
  let className;
  export {className as class};

  function toggle() {
    isOpen = !isOpen
  }

  function onEscape(e) {
    if (!isOpen || e.key !== 'Escape') {
      return
    }
    isOpen = false
  }
</script>

<svelte:window on:keydown={onEscape} />

<div class="relative {className}">
  <button on:click="{toggle}" type="button" class="block focus:outline-none" on:focus="{() => buttonHasFocus = true}" on:blur="{() => buttonHasFocus = false}">
    <slot name="trigger" hasFocus="{buttonHasFocus}" isOpen="{isOpen}"></slot>
  </button>
  <div class="{isOpen ? 'block' : 'hidden'}">
    <button on:click="{() => isOpen = false}" type="button" class="z-30 block fixed inset-0 w-full h-full cursor-default"></button>
    <div class="absolute z-40 right-0">
      <slot name="dropdown"></slot>
    </div>
  </div>
</div>