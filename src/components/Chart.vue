<template>
  <main id="main">
    <div
      class="bar"
      v-for="(el, index) in array"
      :style="{height: `${el}px`}"
      :id="`bar-${index}`" 
      :key="index">
        <span class="bar-number">{{el}}</span>
      </div>
  </main>
</template>

<script>
export default {
  computed: {
    array() {
      return this.$store.state.array;
    }
  }
}
</script>

<style scoped>
#main {
  white-space: nowrap;
}

.bar {
  width: 2rem;
  display: inline-block;
  background-color: chartreuse;
  position: relative;
  text-align: center;
}

.bar .bar-number {
  position: absolute;
  top: -1rem;
  left: 0.25rem;
}
</style>
