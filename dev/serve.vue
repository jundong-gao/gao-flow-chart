<script>
import Vue from 'vue';
import GaoFlowChart from '@/gao-flow-chart.vue';
import options from './test_options'


export default Vue.extend({
  name: 'ServeDev',
  components: {
    GaoFlowChart
  },
  data() {
    return {
      options
    }
  }
});
</script>

<template>
  <div id="app">
    <div style="width: 800px; border: 1px solid blue;">
      <gao-flow-chart :options="options"/>
    </div>
  </div>
</template>
