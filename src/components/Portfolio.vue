<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <portfolio-nav :content="content" :filters="filters" :navs="navs"/>
    <portfolio-feed :filters="filters"/>
    <portfolio-post :post="post"/>
    <portfolio-footer/>
  </main>
</template>

<script>
import PortfolioNav from './PortfolioNav'
import PortfolioFeed from './PortfolioFeed'
import PortfolioPost from './PortfolioPost'
import PortfolioFooter from './PortfolioFooter'

export default {
  name: 'portfolio',
  components: { PortfolioNav, PortfolioFeed, PortfolioPost, PortfolioFooter },
  resource: 'Portfolio',
  props: {
    post: String,
    author: String
  },

  data() {
    return {
      navs: 0,
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels }
    },
    filters() {
      let filters = {}

      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },

  beforeMount() {
    this.$getResource('portfolio')
  }
}
</script>
