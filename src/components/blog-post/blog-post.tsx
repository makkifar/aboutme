import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import classNames from 'classnames'

import { WithStyles } from '@material-ui/styles'

import Query from '../../components/Query'
import ARTICLE_QUERY from '../../queries/article/article'
import GridContainer from '../../material-kit-ui-components/Grid/GridContainer'
import GridItem from '../../material-kit-ui-components/Grid/GridItem'
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'

type Article = {
  data: {
    article: {
      id: string
      title: string
      content: string
      published_at: string
    }
  }
}
interface BlogPostProps extends WithStyles<typeof profilePageStyle> {}
const BlogPost = ({ classes }: BlogPostProps) => {
  const { id } = useParams()

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }: Article) => {
        return (
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <h3 className={classes.title}>{article.title}</h3>
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
                <div>
                  <ReactMarkdown source={article.content} />
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default BlogPost
