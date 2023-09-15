<script>
import Vue from 'vue';
import GaoFlowChart from '@/gao-flow-chart.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    GaoFlowChart
  }
});
</script>

<template>
  <div id="app">
    <div style="width: 800px; border: 1px solid blue;">
      <gao-flow-chart />
    </div>
  </div>
</template>
