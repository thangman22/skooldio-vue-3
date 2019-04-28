<template>
  <div v-if="blog.title" class="blog-detail">
    <p class="wrap" v-html="blog.content.rendered"></p>
    <router-link :to="{ name: 'blog-detail-full', params: { id: blog.id } }"
      >Read more...</router-link
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BlogDetail',
  async asyncData(context) {
    const res = await context.$axios.get(
      'https://blog.skooldio.com/wp-json/wp/v2/posts/' +
        context.route.params.id,
      { progress: false }
    )
    return {
      blog: res.data,
      title: res.data.title.rendered
    }
  },
  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ['title']
    }
  },
  async mounted() {
    // this.$emit('updateHead')
    // this.changeHeader({
    //   title: res.data.title.rendered,
    //   excerpt: res.data.excerpt.rendered
    // })
  },
  methods: {
    ...mapActions(['changeHeader'])
  }
}
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
