import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Query from '../Query'
import ARTICLES_QUERY from '../../queries/article/articles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer'
    }
  })
)

type Article = {
  articleId: string
  title: string
  content: string
}
type Articles = {
  data: {
    articles: Article[]
  }
}
const BlogPostTeasers = ({}) => {
  const classes = useStyles()

  return (
    <>
      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }: Articles) => {
          return articles.map((article, key) => (
            <Grid key={article.articleId} item xs={4} className="clickable">
              <Link
                key={article.articleId}
                to={`/article/${article.articleId}`}
              >
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {article.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
          ))
        }}
      </Query>
    </>
  )
}

export default BlogPostTeasers
