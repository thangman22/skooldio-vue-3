<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.time">
        {{todo.text | cap }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  filters: {
    cap (val) {
      return val.toUpperCase()
    }
  },
  data () {
    return {
      todos:[
        {
          text: '1st todo',
          time: 1556253019,
          completed: false
        },
        {
          text: '2st todo',
          time: 1556253043,
          completed: false
        },
        {
          text: '3st todo',
          time: 1556253065,
          completed: true
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
