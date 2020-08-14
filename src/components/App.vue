<template>
  <div id="app">
    <div>hello word!</div>
    <button @click="sayGoodBey">{{haha}}</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      haha: 'bey'
    }
  },
  methods: {
    sayGoodBey () {
      alert('bey')
    }
  }
}
</script>