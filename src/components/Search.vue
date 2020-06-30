<template>
  <div class="search">
    <label class="search_label" for="search">Search</label>
    <input class="search_input" type="search" id="search">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  position: relative;

  &_label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    font-family: sans-serif;
    padding: 10px 15px;
    color: gray;
  }
  &_input {
    outline: 0;
    border: 0;
    font-family: sans-serif;
    font-size: 20px;
    color: gray;
    border: 1px solid rgba(#000, 0.05);
    padding: 25px 15px 10px 15px;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 3px 10px rgba(#000, 0.02);
  }
}
</style>
