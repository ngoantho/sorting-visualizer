<template>
  
</template>

<script>
import {emitter} from "../../store"

export default {
  mounted() {
    emitter.on("algo-QuickSort", () => this.run())
  },
  methods: {
    run() {
      
    }
  }
}
</script>