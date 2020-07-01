<template>
  <div id="app">
    <Search @search="sendSearchValueToContent" />
    <Content :search="search" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'App',
  components: { Search, Content },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    sendSearchValueToContent(searchContent) {
      // Set emitted search value as `search` const
      // And bind it to Content component
      this.search = searchContent;
    },
  },
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
