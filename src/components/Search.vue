<template>
  <div class="search">
    <input class="search_input" type="search">
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

  &_input {
    outline: 0;
    border: 0;
    font-family: inherit;
    margin-left: 15px;
    font-size: 20px;
    color: gray;
    border-bottom: 2px solid rgba(#000000, 0.05);
    padding: 0 0 5px 0;
  }
}
</style>
