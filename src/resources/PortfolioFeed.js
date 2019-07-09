export default {
  feed() {
    return {
      path: '/portfolio_feed.json',
      resolve: (response, mappers) => mappers.pipe(response.results)
    }
  }
}
