<template></template>

<script>
import { emitter } from "../../store";

export default {
  mounted() {
    emitter.on("algo-QuickSort", (speed) => {
      this.speed = speed;
      this.run(speed);
    });
  },
  data() {
    return {
      speed: 0,
    };
  },
  methods: {
    run() {
      let arr = [...this.$store.getters.array];
      this.quickSort(arr, 0, arr.length - 1);
    },
    swap(items, leftIndex, rightIndex) {
      let temp = items[leftIndex];
      items[leftIndex] = items[rightIndex];
      items[rightIndex] = temp;
    },
    async partition(items, left, right) {
      var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
      while (i <= j) {
        while (items[i] < pivot) {
          i++;
        }
        while (items[j] > pivot) {
          j--;
        }
        if (i <= j) {
          this.swap(items, i, j); //swap two elements
          i++;
          j--;

          await this.pause(this.speed);
          this.$emit("itemSwap", {
            arr: [...items],
            left: i,
            right: j,
          });
        }
      }

      return i;
    },
    async quickSort(items, left, right) {
      var index;
      if (items.length > 1) {
        index = await this.partition(items, left, right); //index returned from partition
        if (left < index - 1) {
          //more elements on the left side of the pivot
          this.quickSort(items, left, index - 1);
        }
        if (index < right) {
          //more elements on the right side of the pivot
          this.quickSort(items, index, right);
        }
      }

      return items;
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
