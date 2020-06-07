import gql from 'graphql-tag'

const ARTICLE_QUERY = gql`
  query Article($articleId: String) {
    article(articleId: $articleId) {
      articleId
      title
      content
    }
  }
`

export default ARTICLE_QUERY
