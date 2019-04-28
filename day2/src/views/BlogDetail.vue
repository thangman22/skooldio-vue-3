<template>
  <div class="blog-detail" v-if="blog.title">
    <p v-html="blog.content.rendered" class="wrap"></p>
    <router-link :to="{ name: 'blog-detail-full', params: { id: blog.id } }"
      >Read more...</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

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
    this.changeHeader({
      title: res.data.title.rendered,
      excerpt: res.data.excerpt.rendered
    });
  },
  methods: {
    ...mapActions(["changeHeader"])
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
