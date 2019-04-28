<template>
  <div class="blog-detail-full" v-if="blog.title">
    <h1>{{ blog.title.rendered }}</h1>
    <p v-html="blog.content.rendered" class="wrap"></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {},
      title: ""
    };
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    }
  },
  async mounted() {
    let res = await axios.get(
      "https://blog.skooldio.com/wp-json/wp/v2/posts/" + this.$route.params.id
    );
    this.blog = res.data;
    this.title = res.data.title.rendered;
    this.$emit("updateHead");
  }
};
</script>

<style>
.blog-detail {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.wrap {
  width: 100%;
}
img {
  max-width: 100%;
}
</style>
