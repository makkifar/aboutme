import React, { useEffect } from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'

import profile from '../assets/landing-page_profile-picture.jpg'
import styles from '../assets/jss/material-kit-react/views/profilePage'

const useStyles = makeStyles(styles)

type Props = {}
export const LandingPage: React.FC<Props> = ({}) => {
  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )

  return (
    <div>
      <div>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
        />
        <Parallax
          small
          filter
          image={require('../assets/landing-page_backgroud.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Farah MAKKI</h3>
                      <h6>Software Enginner</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
