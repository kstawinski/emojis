<template>
  <main class="content">
    <ul class="container content_container">
      <Emoji v-for="emoji in emojis" :char="emoji.char" :key="emoji.codes" :id="emoji.codes" />
    </ul>
  </main>
</template>

<script>
import Emoji from '@/components/Emoji.vue';
import emoji from 'emoji.json';

export default {
  name: 'Content',
  components: { Emoji },
  data() {
    return {
      emojis: emoji,
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  margin: 50px 0;

  &_container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
