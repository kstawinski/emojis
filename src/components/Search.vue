<template>
  <div class="search">
    <input
      class="search_input"
      type="search"
      @keypress="$emit('search', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  padding: 40px 40px 0 40px;

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
