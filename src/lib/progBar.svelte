<script>
    import { data_loading } from "./stores.js";
    import { fade, fly } from "svelte/transition";
    import Fa from "svelte-fa";
    import { faSpinner } from "@fortawesome/free-solid-svg-icons";
</script>

{#if $data_loading}
    <div class="progbar" out:fade>
        <Fa icon={faSpinner} size="3x" spin color="black" />
    </div>
{/if}

<style>
    .progbar {
        position: absolute;
        z-index: 9999;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 20px;
    }
</style>