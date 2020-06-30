<template>
  <li class="emoji" @click="copyToClipboard()">{{ char }}</li>
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
  margin: 10px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #f3f3f3;
  border-radius: 50%;

    &:hover {
      transform: scale(1.2);
    }
}
</style>
