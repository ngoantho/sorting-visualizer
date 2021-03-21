<template>
  <fieldset>
    <legend>Sort settings</legend>
    <select v-model="selected">
      <option v-for="algo in algos" :value="algo" :key="algo">
        {{algo}}
      </option>
    </select>
    <button @click="sort">Sort!</button>
    <component :is="selected" v-if="selected !== ''"></component>
    <empty v-else></empty>
  </fieldset>
</template>

<script>
import EmptyVue from './algorithms/Empty.vue';
export default {
  data() {
    return {
      selected: '',
      algos: ["QuickSort"]
    }
  },
  components: {
    Empty: EmptyVue
  },
  methods: {
    sort() {
      if (this.selected === '') {
        alert("Choose an algorithm.");
        return;
      }
    }
  }
}
</script>

<style scoped>

</style>