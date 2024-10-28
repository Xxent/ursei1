<script>
    import departData from "./stores.js";
    import Progbar from "./progBar.svelte";
    import { data_loading } from "./stores.js";

    export let app_function;

    let selected_1;
    let selected_2;

    const onDepSelected = (e) => {
        selected_2 = "bla"; //Установим преп-ля в placeholder
    };

    const data = departData();
    console.log($data);
</script>


{#if $data_loading}
    <Progbar />
{:else}
<div class="wrapper">

    {#if $data}
    <div class="select-container">
        <select bind:value={selected_1} on:change={(v) => onDepSelected(v)} class="styled-select">
            <option selected disabled>Выберите кафедру</option>
            {#each $data.Departs as item, i}
                <option value={item.Depart_ID}>
                    {item.DepartName}
                </option>
            {/each}
        </select>
    </div>
    
    <div class="select-container">
        <select bind:value={selected_2} class="styled-select">
            <option value="bla" selected disabled>Выберите преподавателя</option>
            {#each $data.Teachers.filter((t) => t.Depart_ID == selected_1) as item, i}
                <option value={item.Emp_ID}>
                    {item.FIO}
                </option>
            {/each}
        </select>
    </div>
    {/if}
</div>
{/if}


<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        border: 1px solid silver;
        border-radius: 30px;
        padding: 20px;
    }
    .wrapper > div {
        margin-left: 20px;
    }
    .select-container {
    margin: 10px 0;
    }

    .styled-select {
    width: 100%;
    padding: 10px;
    border: 2px solid silver; /* черная рамка */
    border-radius: 5px; /* закругленные углы */
    background-color: #fff; /* белый фон */
    color: #000; /* черный текст */
    font-size: 16px;
    appearance: none; /* убираем стандартный стиль браузера */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" viewBox="0 0 16 16"><path d="M1.5 1.5l7 7 7-7H1.5z"/></svg>'); /* стрелка вниз */
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
    cursor: pointer;
    }

    .styled-select:focus {
    outline: none; /* убираем обводку при фокусе */
    border-color: #555; /* серый цвет рамки при фокусе */
    }

    .styled-select option {
    color: #000; /* черный текст для опций */
    }
</style>