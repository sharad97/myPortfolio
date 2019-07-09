export default {
  post(id) {
    return {
      path: `/post/${id}.json`,
      resolve: (response, mappers) => {
        let { title, content, image, imgurl, videoId, code1, meta } = response.results[0]
        content = '<p>' + content.split('\n\n').join('</p><p>') + '</p>'
        return mappers.merge({ title, content, image, imgurl, videoId, code1, ...meta })
      }
    }
  }
}
