export default {
  portfolio() {
    return {
      path: '/portfolio.json',
      resolve: (response, mappers) => {
        let portfolio = response.results[0]
        return mappers.merge({
          title: portfolio.title,
          labels: {
            post: portfolio.post_label,
            author: portfolio.author_label
          }
        })
      }
    }
  }
}
