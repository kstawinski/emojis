<template>
  <li class="emoji animated" @click="click(id)" :id="id">{{ char }}</li>
</template>

<script>
export default {
  name: 'Emoji',
  props: {
    char: String,
    id: String,
  },
  methods: {
    click(emojiId) {
      // Copy emoji to clipboard
      this.copyToClipboard(emojiId);

      // Add class with animation after click
      document.getElementById(emojiId).classList.add('emoji__clicked');

      // Remove class with animation
      window.setTimeout(() => {
        document.getElementById(emojiId).classList.remove('emoji__clicked');
      }, 800);
    },
    copyToClipboard(htmlId) {
      const el = document.createElement('textarea');
      el.value = document.getElementById(htmlId).innerHTML;
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

    &__clicked {
      animation: bounceIn;
      animation-duration: .8s;
    }
}
</style>
