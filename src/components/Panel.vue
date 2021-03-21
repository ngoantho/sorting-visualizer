<template>
  <aside>
    <fieldset>
      <legend>Graph settings</legend>
      <div>
        Number of bars:
        <input type="range" :min="minBars" :max="maxBars" v-model="nBars" />
        {{ nBars }}
      </div>
      <div>
        Sorting speed:
        <input type="range" min="100" max="500" v-model="speed" />
        {{ speed }}ms
      </div>
      <div>
        <button @click="genNewArray">Generate random</button>
      </div>
    </fieldset>
    <sort-panel :speed="speed"></sort-panel>
  </aside>
</template>

<script>
import SortPanel from "./SortPanel.vue";

export default {
  components: { SortPanel },
  data() {
    return {
      minBars: 5,
      maxBars: 50,
      nBars: 20,
      speed: "100",
    };
  },
  mounted() {
    this.genNewArray();
  },
  methods: {
    genNewArray() {
      let tmpArr = [];
      for (let i = 0; i < this.nBars; i++) {
        tmpArr.push(this.randomInt(0, 500));
      }
      this.$store.dispatch("update", tmpArr);
    },
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>

<style scoped>
aside {
  margin-bottom: 2rem;
}
</style>
