<template>
  <div id="app">
    <div>hello word!</div>
    <button @click="sayGoodBey"></button>
  </div>
</template>
<script>
export default {
  methods: {
    sayGoodBey () {
      alert('bey')
    }
  }
}
</script>