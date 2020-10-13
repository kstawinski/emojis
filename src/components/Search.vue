<template>
  <div class="search">
    <input
      class="search_input"
      type="search"
      id="search"
      @keypress="$emit('search', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Search',
  mounted() {
    window.addEventListener('keyup', (event) => {
      // On slash click
      if (event.key === '/') {
        // Focus input
        document.querySelector('#search').focus();
      }
    });
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  padding: 20px 40px 30px;
  background: linear-gradient(#fff 0%, #fff 90%, rgba(255,255,255,0) 100%);
  position: sticky;
  top: 0;

  &_input {
    outline: 0;
    border: 0;
    font-family: sans-serif;
    font-size: 20px;
    color: gray;
    border: 1px solid rgba(#000, 0.05);
    padding: 15px;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 3px 10px rgba(#000, 0.02);
    background: transparent;
    -webkit-appearance: textfield;
  }
}
</style>
