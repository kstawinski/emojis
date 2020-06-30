<template>
  <div id="app">
    <Search />
    <Content />
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'App',
  components: { Search, Content },
};
</script>

<style lang="scss">
@import url('assets/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

body {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
