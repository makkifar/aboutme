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
        <p>Download my cv or check out my blog posts to know more!</p>
      </div>
    </>
  )
}

export default PersonalInfo
