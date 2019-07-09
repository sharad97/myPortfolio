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
      <!--<div><a @click="log">click me</a></div>-->
      <section class="post__body rte" v-html="content"></section>
      
          

      <div v-if="videoId">
        <p class="post__body rte">
          <youtube :video-id="videoId"></youtube>
        </p>
      </div>
      
      
      <div v-if="code1"><!-- checks if object is null -->
        <section class="post__body rte">
          <p>First create HTML webpage in your project folder or anywhere you desire. Now, reference the JavaScript file from the head of the HTML file.</p>
          <code>
            <pre>
              <span>1. &lt;!DOCTYPE html&gt;    </span>
              <span>2. &lt;html&gt;    </span>
              <span>3.   &lt;head&gt;    </span>
              <span>4.     &lt;script type="text/javascript" src="https://d3js.org/d3.v5.js"&gt;&lt;/script&gt;    </span>
              <span>5.   &lt;/head&gt;    </span>
              <span>6.   &lt;body&gt;    </span>
              <span>7.     &lt;p&gt;Hello!&lt;/p&gt;    </span>
              <span>8.   &lt;/body&gt;    </span>
              <span>9. &lt;/html&gt;    </span>
            </pre>
          </code>
        </section>
      </div>
      
      <div v-if="code1"><!-- checks if object is null -->
        <section class="post__body rte">
          <br>
          <p>1. Make an SVG container (the SVG Coordinate Space)<br>
              2. Draw the circle</p>
           
          <code>
            <pre>
              <span>1. &lt;!DOCTYPE html&gt;    </span>
              <span>2. &lt;html&gt;    </span>
              <span>3.   &lt;head&gt;    </span>
              <span>4.     &lt;script type="text/javascript" src="https://d3js.org/d3.v5.js"&gt;&lt;/script&gt;    </span>
              <span>5.   &lt;/head&gt;    </span>
              <span>6.   &lt;body&gt;    </span>
              <span>7.     &lt;script&gt;   </span>
              <span>8.           var svgContainer = d3.select("body").append("svg")     </span>
              <span>9.			                             .attr("width", 200)      </span>
              <span>10.                             		     .attr("height", 200);      </span>
              <span>11.                                                                   </span>
              <span>12.          //Draw the Circle            </span>
              <span>13.          var circle = svgContainer.append("circle")    </span>
              <span>14.                  	          .attr("cx", 30)   </span>
              <span>15.                                   .attr("cy", 30)   </span>
              <span>16.                                   .attr("r", 20)    </span>
              <span>17.				          .style("fill", "red");    </span>
              <span>18.                                                     </span>
              <span>19.          var rectangle = svgContainer.append("rect")    </span>
              <span>20.                                      .attr("x", 100)    </span>
              <span>21.                    		     .attr("y", 10)     </span>
              <span>22.                    		     .attr("width", 50)    </span>
              <span>23.                     		     .attr("height", 100)    </span>
              <span>24.				             .style("fil", "blue");   </span>
              <span>25.    &lt;/script&gt;   </span>
              <span>26.  &lt;/body&gt;    </span>
              <span>27. &lt;/html&gt;    </span>
            </pre>
          </code>
        </section>
      </div>
      
      <div v-if="imgurl" >
        <p class="post__body rte">Output:
          <img :src=imgurl>
        </p>
      </div>
    
      
      <footer class="post__footer">
        <vue-disqus v-if="commentsReady" shortname="blog-p0rvctkx1j"
          :key="post" :identifier="post" :url="`https://sharadportfolio.netlify.com/read/${post}`"/>
      </footer>
    </article>
  </transition>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus'
import { kebabify, prettyDate } from '../helpers'

export default {
  name: 'blog-post',
  resource: 'BlogPost',
  components: { VueDisqus },
  props: { post: String },

  data() {
    return {
      title: '',
      author: '',
      content: '',
      imgurl: '',
      videoId: '',
      code1: '',
      published: '',
      description: '',
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
    },
    method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    },
    log() {
      console.log(this.$data);
    }
  },

  beforeMount() {
    if (!this.post) return;
    this.$getResource('post', this.post)
      .then(this.showComments)
  }
}
</script>
