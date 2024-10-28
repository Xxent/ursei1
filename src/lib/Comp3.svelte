<script>
    let data = [
      { number: 1, letters: ['A', 'B'] },
      { number: 2, letters: ['C', 'D'] },
      { number: 3, letters: ['E', 'F'] },
      { number: 4, letters: ['G', 'H'] },
      { number: 5, letters: ['I', 'J'] }
    ];
    let selectedNumber = '';
    let selectedLetter = '';
  
    function updateSelectedNumber(event) {
      selectedNumber = event.target.value;
      selectedLetter = ''; // reset selected letter when number changes
    }
  
    function updateSelectedLetter(event) {
      selectedLetter = event.target.value;
    }
  </script>
  
  <select on:change={updateSelectedNumber}>
    <option value="" disabled selected>Выберите число</option>
    {#each data as item}
      <option value={item.number}>{item.number}</option>
    {/each}
  </select>
  
  {#if selectedNumber}
    <select on:change={updateSelectedLetter}>
      <option value="" disabled selected>Выберите букву</option>
      {#each data.filter(item => item.number.toString() === selectedNumber)[0].letters as letter}
        <option value={letter}>{letter}</option>
      {/each}
    </select>
  {/if}
  
  <h2>Выбранные значения:</h2>
  <p>Число: {selectedNumber}</p>
  <p>Буква: {selectedLetter}</p>