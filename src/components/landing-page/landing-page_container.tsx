import React from 'react'
import classNames from 'classnames'

import { WithStyles } from '@material-ui/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import { BlogPostTeasers } from '../blog-post-teasers'
import { PersonalInfo } from '../personal-info'
import { CV } from '../cv'
import Parallax from '../../material-kit-ui-components/Parallax/Parallax'
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'

interface LandingPageProps extends WithStyles<typeof profilePageStyle> {}
class LandingPage extends React.Component<LandingPageProps> {
  render() {
    const { classes } = this.props

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
                <BlogPostTeasers />
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(profilePageStyle)(LandingPage)
