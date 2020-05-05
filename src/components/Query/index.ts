import { useQuery } from '@apollo/react-hooks'

type QueryProps = {
  id?: string
  children: any
  query: any
}
const Query = ({ children, query, id }: QueryProps) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  })

  return data ? children({ data }) : null
}

export default Query
