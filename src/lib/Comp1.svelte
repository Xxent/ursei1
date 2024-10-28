<script>
    // Импорт переменной count из файла 'stores.js', которая представляет собой хранилище данных
    import { count } from './stores.js';
    // Экспорт переменной 'app_function'
    export let app_function;
    // Локальная переменная numbers, которая получает текущее значение из хранилища $count
    let numbers = $count;
    // Локальная переменная для хранения индекса выбранного элемента массива
    let selectedNumberIndex = null;
    // Генерация массива уникальных ключей с использованием метода Array.from(), который создает массив длиной 10
    let uniqueKeys = Array.from({ length: 10 }, (_, i) => `key-${i + 1}`);
    // Когда изменяется, обновляет переменную numbers и пересчитывает массив uniqueKeys в зависимости от длины numbers.
    $: {
      numbers = $count;
      uniqueKeys = Array.from({ length: numbers.length }, (_, i) => `key-${i + 1}`);
    }
    // Функция для добавления числа в массив, новое число, равное длине массива + 1
    function addNumber() {
      count.update(n => [...n, n.length + 1]);
    }
    // Удаления последнего числа из массива numbers. Если после удаления элементов не осталось, вызывается функция app_function с сообщением "Элементов больше нет".
    function removeNumber() {
      if (numbers.length > 0) {
        count.update(n => n.slice(0, -1));
        if (numbers.length === 1) {
          app_function('Элементов больше нет');
        }
      }
    }
    // Функция для выбора следующего элемента массива.
    // Если ни один элемент не выбран (selectedNumberIndex === null), выбирается первый элемент (индекс 0)
    // Иначе индекс увеличивается на 1, и если он достигает конца массива, то обнуляется
    function selectNumber() {
      if (selectedNumberIndex === null) {
        selectedNumberIndex = 0;
      } else {
        selectedNumberIndex = (selectedNumberIndex + 1) % numbers.length;
      }
    }
  </script>
  
  <div class="wrapper">
     <!-- Блок с кнопками "Добавить", "Удалить" и "Выделить" -->
  <div style="display: flex; justify-content: space-around; margin-top: 20px;">
    <button on:click={addNumber}>Добавить</button>
    <button on:click={removeNumber} disabled={numbers.length === 0}>Удалить</button>
    <button on:click={selectNumber}>Выделить</button>
  </div>
   <!-- Таблица для отображения элементов массива, их индексов и случайных уникальных ключей -->
  <div style="display: flex; justify-content: space-around;">
    <table>
        <thead> 
      <tr>
        <!-- Заголовки столбцов таблицы -->
        <th style="text-align: center">Элементы массива</th>
        <th style="text-align: center">Индексы элементов</th>
        <th style="text-align: center">Уникальные ключи</th>
      </tr>
        </thead>
      <!-- Цикл each от Svelte, который проходит по каждому элементу массива numbers -->
      {#each numbers as number, index}
      <!-- Если индекс элемента совпадает с selectedNumberIndex, строка выделяется зеленым цветом -->
      <tbody> 
        <tr style:background-color={index === selectedNumberIndex ? 'green' : 'none'}>
          <!-- Ячейка с числом из массива, индексом и ключем -->
          <td style="text-align: center">{number}</td>
          <td style="text-align: center">{index}</td>
          <td style="text-align: center">{Math.floor(Math.random() * 1000)}</td>
        </tr>
        </tbody> 
      {/each}

    </table>
  </div>
  
  </div>
  
  <style>
  .wrapper{
      border:1px solid silver; /* Добавляет рамку вокруг компонента */
      border-radius: 30px; /* Скругляет углы рамки */
      padding:30px;/* Добавляет внутренние отступы (padding) */
  }
  </style>