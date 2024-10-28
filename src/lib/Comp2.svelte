<script>
    export let app_function
    import { count } from './stores.js';
    let sum = 0;
  
    function calculateSum() {
      sum = $count.reduce((acc, current) => {
        return current % 2 === 0 ? acc + current : acc;
      }, 0);
    }
  </script>
  
  <!-- Your form and buttons to calculate sum -->
  <div class='wrapper'>
  
  <div style="display: flex; justify-content: center;">
    <button on:click={calculateSum} on:click={()=>app_function(sum)}>Посчитать</button>
  </div>
  
  <div style="display: flex; justify-content: space-around;">
    {#each $count as item}
      {item}{' '}
    {/each}
  </div>
  
  <div style="display: flex; justify-content: space-around;">
    {#if sum > 0}
      {#each $count.filter(x => x % 2 === 0) as item}
        {#if $count.filter(x => x % 2 === 0).indexOf(item) === 0}
          {item}
        {:else}
          + {item}
        {/if}
      {/each} = {sum}
    {:else}
      Сумма не рассчитана
    {/if}
  </div>
  
  </div>
  
  <style>
    .wrapper{
        border:1px solid silver;
        border-radius: 30px;
        padding:30px;
    }
  </style>