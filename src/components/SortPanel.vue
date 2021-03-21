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
      emitter.emit(`algo-${this.selected}`, this.intSpeed);
    },
    handleSwap(data) {
      this.$store.dispatch("update", data.arr);
    },
  },
};
</script>

<style scoped></style>
