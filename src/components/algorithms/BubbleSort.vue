<template></template>

<script>
import { emitter } from "../../store";

export default {
  mounted() {
    emitter.on("algo-BubbleSort", (speed) => this.run(speed));
  },
  methods: {
    async run(speed) {
      let arr = [...this.$store.getters.array];
      let isSorted = false;
      let index = arr.length - 1;

      while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < index; i++) {
          isSorted = false;
          if (arr[i] > arr[i + 1]) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;

            await this.pause(speed);
            this.$emit("itemSwap", {
              arr: [...arr],
              left: i,
              right: i + 1,
            });
          }
        }
        index--;
      }
    },
    pause(speed) {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
    },
  },
};
</script>
