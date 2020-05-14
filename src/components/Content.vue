<template>
  <main class="content">
    <div class="container content_container">
      <Emoji v-for="emoji in emojis" :char="emoji" :key="emoji" />
    </div>
  </main>
</template>

<script>
import Emoji from '@/components/Emoji.vue';

export default {
  name: 'Content',
  components: { Emoji },
  data() {
    return {
      emojis: ['😍', '😎', '😜', '🙄', '🙈'],
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  &_container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
