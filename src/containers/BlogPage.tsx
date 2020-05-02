import React from 'react'
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { CloudDownload, Pages } from '@material-ui/icons'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'

import profile from '../assets/landing-page_profile-picture.jpg'

import profilePageStyle from '../assets/jss/material-kit-react/views/profilePage'
import { WithStyles } from '@material-ui/styles'

interface IProfilePage extends WithStyles<typeof profilePageStyle> {}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class BlogPage extends React.Component<IProfilePage> {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const backgroundImageIndex = randomInteger(1, 5)

    return (
      <div>
        <Parallax
          small
          filter
          image={require(`../assets/backgrounds/background_${backgroundImageIndex}.jpg`)}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <h3 className={classes.title}>Blog Post Title</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div>
                <p>Blog Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(BlogPage)
