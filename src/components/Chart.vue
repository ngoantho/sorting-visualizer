<template>
  <main id="main">
    <div
      class="bar"
      v-for="(el, index) in array"
      :style="{ height: `${el}px`, width: `${barwidth}rem` }"
      :id="`bar-${index}`"
      :key="index"
    >
      <span class="bar-number">{{ el }}</span>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    array() {
      return this.$store.getters.array;
    },
    barwidth() {
      return 25 / this.$store.getters.array.length;
    },
  },
};
</script>

<style scoped>
#main {
  white-space: nowrap;
}

.bar {
  display: inline-block;
  background-color: chartreuse;
  position: relative;
  margin-right: 0.5rem;
}

.bar .bar-number {
  position: absolute;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  top: -1.5rem;
}
</style>
