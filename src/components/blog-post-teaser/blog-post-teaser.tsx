import React from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

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

type BlogPostTeaserProps = {
  title: string
}
const BlogPostTeaser = ({ title }: BlogPostTeaserProps) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push('/blog')
  }

  return (
    <Grid item xs={4} onClick={handleClick} className="clickable">
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default BlogPostTeaser
