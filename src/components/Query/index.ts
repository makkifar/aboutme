import { useQuery } from '@apollo/react-hooks'

type QueryProps = {
  articleId?: string
  children: any
  query: any
}
const Query = ({ children, query, articleId }: QueryProps) => {
  const { data, loading, error } = useQuery(query, {
    variables: { articleId: articleId }
  })

  return data ? children({ data }) : null
}

export default Query
