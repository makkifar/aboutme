import React from 'react'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import { WithStyles } from '@material-ui/styles'

import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'
import profile from '../../assets/img/landing-page_profile-picture.jpg'

interface PersonalInfoProps extends WithStyles<typeof profilePageStyle> {}
const PersonalInfo = ({ classes }: PersonalInfoProps) => {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <div className={classes.profile}>
            <div>
              <img src={profile} className={imageClasses} />
            </div>
            <div className={classes.name}>
              <h3 className={classes.title}>Farah Makki</h3>
              <h6>Software Engineer</h6>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.description}>
        <p>
          Visit my{' '}
          <a href="https://www.linkedin.com/in/farah-makki-7ba03665">
            LinkedIn Profile
          </a>{' '}
          or check out my blog posts below to know more!
        </p>
      </div>
    </>
  )
}

export default PersonalInfo
