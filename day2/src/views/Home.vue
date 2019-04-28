<template>
  <div class="home">
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link
          :to="{
            name: 'blog-detail',
            params: {
              id: blog.id
            }
          }"
          >{{ blog.title.rendered }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      blogs: []
    };
  },
  async mounted() {
    let res = await axios.get("https://blog.skooldio.com/wp-json/wp/v2/posts/");
    this.blogs = res.data;
  }
};
</script>
<style>
li {
  list-style: none;
}
</style>
