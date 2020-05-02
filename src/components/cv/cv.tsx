import React from 'react'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import { WithStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { CloudDownload } from '@material-ui/icons'

import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'
import Pdf from '../../assets/cv/cv.pdf'

interface PersonalInfoProps extends WithStyles<typeof profilePageStyle> {}
const CV = ({ classes }: PersonalInfoProps) => {
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
            <ButtonGroup variant="text" color="primary">
              <Button href={Pdf} target="_blank" startIcon={<CloudDownload />}>
                Download CV
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default CV
