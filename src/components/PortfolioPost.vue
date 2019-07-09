<template>
  <transition name="post">
    <article v-if="post" class="post">
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>

        <h3 class="post__meta">by <router-link class="post__author"
          :to="`/by/${kebabify(author)}`">{{ author }}</router-link>
          <span class="post__sep"></span>
          <time>{{ prettyDate(published) }}</time>
        </h3>

        <blockquote class="post__subtitle">{{ description }}</blockquote>
      </header>

      <section class="post__body rte" v-html="content"></section>
      <section class="post__body rte">
        <v-card-actions>
          <v-btn flat color="purple" v-bind:href="source" target="_blank">
            <v-icon left>fa fa-code</v-icon>source
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn flat color="purple" v-bind:href="livedemo" target="_blank">
            <v-icon left>fa fa-external-link</v-icon>livedemo
          </v-btn>
        </v-card-actions>
      </section>
      
      <footer class="post__footer">
        <vue-disqus v-if="commentsReady" shortname="blog-p0rvctkx1j"
          :key="post" :identifier="post" :url="`https://sharadportfolio.netlify.com/portfolio/read/${post}`"/>
      </footer>
    </article>
  </transition>
</template>
<style>
  @import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
<script>
import VueDisqus from 'vue-disqus/VueDisqus'
import { kebabify, prettyDate } from '../helpers'

export default {
  name: 'portfolio-post',
  resource: 'PortfolioPost',
  components: { VueDisqus },
  props: { post: String },

  data() {
    return {
      title: '',
      author: '',
      content: '',
      published: '',
      description: '',
      livedemo: '',
      source: '',
      commentsReady: true
    }
  },

  watch: {
    post(to, from) {
      if (to === from || !this.post) return;

      this.commentsReady = false
      this.$getResource('post', to)
        .then(this.showComments)
    }
  },

  methods: {
    kebabify,
    prettyDate,
    showComments() {
      setTimeout(() => {
        this.commentsReady = true
      }, 1000)
    }
  },

  beforeMount() {
    if (!this.post) return;
    this.$getResource('post', this.post)
      .then(this.showComments)
  }
}
</script>
