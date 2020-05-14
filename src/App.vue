<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'App',
  components: { Header, Content },
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
