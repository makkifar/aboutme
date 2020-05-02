import React from 'react'
import { useHistory } from 'react-router-dom'
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
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Pdf from '../assets/cv/cv.pdf'

interface IProfilePage extends WithStyles<typeof profilePageStyle> {}

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

const FormRow: React.FC<{}> = ({}) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push('/blog')
  }
  return (
    <React.Fragment>
      <Grid item xs={4} onClick={handleClick} className="clickable">
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Blog Post Title
              </Typography>
              <Typography variant="body2" gutterBottom>
                Summary
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4} onClick={handleClick}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Blog Post Title
              </Typography>
              <Typography variant="body2" gutterBottom>
                Summary
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4} onClick={handleClick}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Blog Post Title
              </Typography>
              <Typography variant="body2" gutterBottom>
                Summary
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

class LandingPage extends React.Component<IProfilePage> {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <div>
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
                      <h3 className={classes.title}>Farah Makki</h3>
                      <h6>Software Engineer</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>Download my cv or check out my blog posts to know more!</p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <ButtonGroup
                      variant="text"
                      color="primary"
                      aria-label="text primary button group"
                    >
                      <Button
                        href={Pdf}
                        target="_blank"
                        startIcon={<CloudDownload />}
                      >
                        Download CV
                      </Button>
                    </ButtonGroup>
                  </div>
                </GridItem>
              </GridContainer>
              <div>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <FormRow />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(LandingPage)
