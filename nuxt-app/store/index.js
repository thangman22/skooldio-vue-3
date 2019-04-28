export const state = () => ({
  title: '',
  excerpt: ''
})

export const mutations = {
  changeTitle(state, title) {
    state.title = title
  },
  changeExcerpt(state, excerpt) {
    state.excerpt = excerpt
  }
}

export const actions = {
  changeHeader(context, payload) {
    // {
    //   title:"",
    //   excerpt:""
    // }
    context.commit('changeTitle', payload.title)
    context.commit('changeExcerpt', payload.excerpt)
  }
}
