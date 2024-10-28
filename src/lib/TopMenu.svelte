<script>
    let selectedIndex = 0;
    let isPressed = false;
    export let selectcomp;
    let menuItems = [
        {label: "Страница 1" },
        {label: "Страница 2" },
        {label: "Страница 3" },
        {label: "Страница 4" },
        {label: "Страница 5" },
        // Add more items here...
    ];
</script>

<div class="topmenu">
    {#each menuItems as item, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class:selected={selectedIndex === i}
            class:pressed={isPressed && selectedIndex === i}
            on:mousedown={() => isPressed = true}
            on:mouseup={() => {
                isPressed = false;
                selectcomp(i);
                selectedIndex = i;
            }}
        >
            {item.label}
        </div>
    {/each}
</div>

<style>
    .topmenu {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    .topmenu div {
        cursor: pointer;
    }

    .selected {
        background-color: #ccc; /* add your desired styles here */
        color: #333;
    }

    .pressed {
        background-color: #aaa; /* add your desired styles here */
        color: #333;
    }
</style>
