<template></template>

<script>
import { emitter } from "../../store";

export default {
  mounted() {
    emitter.on("algo-Empty", () => this.run());
  },
  methods: {
    run() {
      alert("Choose an algorithm.");
      emitter.emit("sortingEnd");
    },
  },
};
</script>
