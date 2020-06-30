<template>
  <header class="header">
    <div class="container">
      <Search />
    </div>
  </header>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'Header',
  components: { Search },
};
</script>

<style scoped lang="scss">
.header {
  margin-top: 40px;
}
</style>
