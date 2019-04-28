<template>
  <form @submit.prevent="submitData()" id="inputBox">
    <input type="text" name="newInput" v-model="inputText" v-validate="'required'" id="input">
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  name: "inputBox",
  data() {
    return {
      inputText: "New todo"
    };
  },
  methods: {
    log () {
        console.log('LOG')
    },
    submitData() {
      if (!this.errors.has("newInput")) {
        let todoItem = {
          text: this.inputText,
          time: Date.now(),
          completed: false
        };
        this.inputText = "";
        this.$emit('onSubmitData',todoItem)
      }
    }
  }
};
</script>

<style>
</style>
