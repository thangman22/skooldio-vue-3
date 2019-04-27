<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos" 
      :key="todo.time" 
      :id="prefix + todo.time" 
      :class="{
        red: (todo.completed === false),
        green: (todo.completed === true),
      }"
      :style="{
        'font-size':fontSize
      }">
        {{todo.text | cap }}
      </li>
    </ul>
    <form>
      <input type="text" v-model.lazy="inputText">
      <button type="submit">Save</button>
    </form>
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
      fontSize: '20px',
      prefix: 'item-',
      inputText:'',
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.red {
  color: crimson;
}
.green {
  color:darkgreen;
}
.big{
  font-size: 18px;
}
</style>
