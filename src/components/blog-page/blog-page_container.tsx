import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import { WithStyles } from '@material-ui/styles'

import { BlogPost } from '../blog-post'
import Parallax from '../../material-kit-ui-components/Parallax/Parallax'
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'

const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

interface BlogPageProps extends WithStyles<typeof profilePageStyle> {}
class BlogPage extends React.Component<BlogPageProps> {
  render() {
    const { classes } = this.props

    const backgroundImageIndex = randomInteger(1, 5)

    return (
      <div>
        <Parallax
          small
          filter
          image={require(`../../assets/img/blog-backgrounds/background_${backgroundImageIndex}.jpg`)}
        />

        <BlogPost classes={classes} />
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(BlogPage)
