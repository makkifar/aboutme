import React from 'react'
import classNames from 'classnames'

import { WithStyles } from '@material-ui/styles'

import GridContainer from '../../material-kit-ui-components/Grid/GridContainer'
import GridItem from '../../material-kit-ui-components/Grid/GridItem'
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage'

interface BlogPostProps extends WithStyles<typeof profilePageStyle> {}
const BlogPost = ({ classes }: BlogPostProps) => {
  return (
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
  )
}

export default BlogPost
