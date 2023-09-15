## 使用方法
- cdn引入
```js
<script src="./dist/gao-flow-chart.min.js"></script>
```

- vue2.x
```bash
#npm
npm install gao-flow-chart -S
#yarn
yarn add gao-flow-chart
```
```js
//main.js
import GaoFlowChart from 'gao-flow-chart'
Vue.use(GaoFlowChart)
```
```html
<template>
    <div>
        <!-- options来源见【options来源】 -->
        <gao-flow-chart :options="options"></gao-flow-chart>
    </div>
</template>


<script>
    import options from './options.js'
    export default {
        data() {
            return {
                options
            }
        }
    }
</script>

```
## options来源
访问[https://gaojundong.com/flow-chart](https://gaojundong.com/flow-chart)。创建自己的图标，导出js文件



