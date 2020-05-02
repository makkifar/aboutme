import React from 'react'
import classNames from 'classnames'

import { WithStyles } from '@material-ui/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { BlogPostTeaser } from '../blog-post-teaser'
import { PersonalInfo } from '../personal-info'
import { CV } from '../cv'

import Parallax from '../../material-kit-ui-components/Parallax/Parallax'

import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'

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

interface LandingPageProps extends WithStyles<typeof profilePageStyle> {}
class LandingPage extends React.Component<LandingPageProps> {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <>
        <Parallax
          small
          filter
          image={require('../../assets/img/landing-page_backgroud.jpg')}
        />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <PersonalInfo classes={classes} />

            <CV classes={classes} />

            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <BlogPostTeaser title="Blog Post 1" />
                <BlogPostTeaser title="Blog Post 2" />
                <BlogPostTeaser title="Blog Post 3" />
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(profilePageStyle)(LandingPage)
