<template>
  <fieldset>
    <legend>Sort settings</legend>
    <select v-model="selected">
      <option v-for="algo in algos" :value="algo" :key="algo">
        {{ algo }}
      </option>
    </select>
    <button @click="sort">Sort!</button>
    <component :is="selected" @itemSwap="handleSwap"></component>
  </fieldset>
</template>

<script>
import EmptyVue from "./algorithms/Empty.vue";
import QuickSortVue from "./algorithms/QuickSort.vue";
import { emitter } from "../store";
import BubbleSortVue from "./algorithms/BubbleSort.vue";

export default {
  data() {
    return {
      selected: "Empty",
      algos: ["QuickSort", "BubbleSort"],
    };
  },
  props: {
    speed: String,
  },
  computed: {
    intSpeed() {
      return parseInt(this.speed);
    },
  },
  components: {
    Empty: EmptyVue,
    QuickSort: QuickSortVue,
    BubbleSort: BubbleSortVue,
  },
  methods: {
    sort() {
      emitter.emit("sortingStart");
      emitter.emit(`algo-${this.selected}`, this.intSpeed);
    },
    changeColor(color, index) {
      let temp = document.getElementById(`bar-${index}`);
      if (temp) {
        temp.style.backgroundColor = color;
      }
    },
    resetAllBars(color) {
      let bars = document.querySelector("#main").children;
      [...bars].forEach((bar) => {
        bar.style.backgroundColor = color;
      });
    },
    handleSwap(data) {
      this.changeColor("red", data.left);
      this.changeColor("blue", data.right);

      setTimeout(() => {
        this.changeColor("chartreuse", data.left);
        this.changeColor("chartreuse", data.right);
      }, this.intSpeed);

      this.$store.dispatch("update", data.arr);
    },
  },
};
</script>

<style scoped></style>
