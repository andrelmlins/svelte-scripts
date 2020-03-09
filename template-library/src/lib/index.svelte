<script>
  export let count = 0;
</script>

<style>
  .button {
    border: none;
    box-shadow: none;
    background-color: #00838f;
    color: #fff;
    padding: 0px 20px;
    font-size: 20px;
    height: 40px;
  }
</style>

<button class="button" on:click={() => count++}>Clicked: {count}</button>
