<script>
    import Fa from 'svelte-fa'
    import { faFlag } from '@fortawesome/free-solid-svg-icons'
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    export let app_function
</script>

<div class='wrapper'>
<h1>
    Компонент 4
    <Fa icon={faFlag} />
</h1>
<div>
    <button on:click={()=>app_function('Сообщение 5')}>Кнопка 5</button>
</div>
</div>

<style>
    button{
        width: 100px;
        height:50px;
        background-color: rgb(16, 29, 87);
        color:azure
    }
    .wrapper{
        border:1px solid silver;
        border-radius: 30px;
        padding:30px;
    }
</style>
