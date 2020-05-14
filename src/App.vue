<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style lang="scss">
@import url('assets/reset.css');

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
