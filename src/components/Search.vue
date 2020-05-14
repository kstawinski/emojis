<template>
  <div class="search">
    <button class="search_button button" @click="toggleInput()">
      <img class="button_icon" src="../assets/search.svg" alt="Search icon">
    </button>
    <input v-if="showInput" type="text" class="search_input">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      showInput: false,
    };
  },
  methods: {
    toggleInput() {
      this.showInput = !this.showInput;
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;

  &_button {
    border: 0;
    padding: 0;
    outline: 0;
    position: relative;

      &:before {
        content: '';
        width: 30px;
        height: 30px;
        background: rgba(#000000, 0.05);
        position: absolute;
      }
  }
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
.button {
  &_icon {
    width: 35px;
  }
}
</style>
