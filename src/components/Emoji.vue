<template>
  <div class="emoji">{{ char }}</div>
</template>

<script>
export default {
  name: 'Emoji',
  props: {
    char: String,
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
