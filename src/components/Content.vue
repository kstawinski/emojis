<template>
  <main class="content">
    <ul class="container content_container">
      <Emoji
        v-for="emoji in getEmojiList(emojiArray, this.search)"
        :char="emoji.char"
        :key="emoji.codes"
        :id="emoji.codes" />
    </ul>
  </main>
</template>

<script>
import Emoji from '@/components/Emoji.vue';
import emoji from 'emoji.json';
import searchArray from 'js-search-array';

export default {
  name: 'Content',
  components: { Emoji },
  props: {
    search: String,
  },
  data() {
    return {
      // Bind emojiArray as emoji.json list
      emojiArray: emoji,
    };
  },
  methods: {
    getEmojiList() {
      if (this.search.length < 3) {
        // Return array with all emojis
        return this.emojiArray;
      }

      // Return array with searched emoji if length > 3
      return searchArray(this.search, this.emojiArray, 'name');
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  margin: 50px 0;

  &_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
