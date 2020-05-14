<template>
  <div class="emoji" @click="copyToClipboard()">{{ char }}</div>
</template>

<script>
export default {
  name: 'Emoji',
  props: {
    char: String,
  },
  methods: {
    copyToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.char;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
};
</script>

<style scoped lang="scss">
.emoji {
  font-size: 3em;
  cursor: pointer;
  transition: 0.15s all;
  margin: 5px;

    &:hover {
      transform: scale(1.2);
    }
}
</style>
