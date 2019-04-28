<template>
  <div>
    <h1>{{ title }}</h1>
    <h5>{{ excerpt }}</h5>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["title", "excerpt"])
  },
  watch: {
    title: function() {}
  }
};
</script>

<style></style>
