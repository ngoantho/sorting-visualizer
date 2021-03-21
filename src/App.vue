<template>
  <h1 class="title">Sorting algorithm visualizer</h1>
  <div id="landing">
    <panel></panel>
    <chart></chart>
  </div>
</template>

<script>
import Panel from "./components/Panel.vue"
import Chart from "./components/Chart.vue"

export default {
  components: {
    Panel,
    Chart
  }
}
</script>

<style>
:root {
  font-size: 16px;
}

.title {
  text-align: center;
}

#landing {
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>