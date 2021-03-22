<template>
  <aside>
    <fieldset>
      <legend>Graph settings</legend>
      <div>
        Number of bars:
        <input
          type="range"
          :min="minBars"
          :max="maxBars"
          v-model="nBars"
          :disabled="disabled"
        />
        {{ nBars }}
      </div>
      <div>
        Sorting speed:
        <input
          type="range"
          min="0"
          max="300"
          v-model="speed"
          :disabled="disabled"
        />
        {{ speed }}ms
      </div>
      <div>
        <button @click="genNewArray" :disabled="disabled">
          Generate random
        </button>
      </div>
    </fieldset>
    <sort-panel :speed="speed" :disabled="disabled"></sort-panel>
  </aside>
</template>

<script>
import SortPanel from "./SortPanel.vue";
import { emitter } from "../store";

export default {
  components: { SortPanel },
  data() {
    return {
      minBars: 5,
      maxBars: 50,
      nBars: 20,
      speed: "100",
      disabled: false,
    };
  },
  mounted() {
    this.genNewArray();
    emitter.on("sortingStart", () => {
      this.disabled = true;
    });
    emitter.on("sortingEnd", () => {
      this.disabled = false;
    });
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
