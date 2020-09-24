import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
} from '@material-ui/core/'

import { MightyButton } from './'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  green: {
    color: theme.palette.primary.main,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
  },
}))

export default function About() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`About`}
        avatar={
          <Avatar aria-label="recipe" src={`/logo32.png`} className={clsx(classes.avatar)} />
        }
      />

      <CardContent>

          <Typography  variant={`body1`} gutterBottom className={clsx(classes.green)}>
            How is Cannastore the World's First Cannabis Mobile App?
          </Typography>

          <Typography  variant={`body1`} gutterBottom>
            Because it's a Progressive Web App. 
            Which means it does not have to be installed via an App Store. 
            The App Stores don't allow Apps about Cannabis. But what is a 
            Progressive Web App? Ask Google. After all, they invented them. 
            Which explains why they're weak on Apple devices.
          </Typography>

      </CardContent>

      <CardActions disableSpacing>
        
          <MightyButton btn={{
              fullWidth: true,
              label: `Read more`,
              icon: `next`,
              color: `primary`,
              onClick:(e) => {
                e.preventDefault()
                handleExpandClick()
              },
            }}/>
            
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography variant={`body2`} gutterBottom>
            Progressive Web Apps use modern web capabilities to deliver an 
            app-like user experience. They evolve from pages in browser tabs 
            to immersive, top-level apps, maintaining the web's low friction at every moment.

            It's important to remember that Progressive Web Apps 
            work everywhere but are supercharged in modern browsers. 
            Progressive enhancement is a backbone of the model.

            Aaron Gustafson likened progressive enhancement 
            to a peanut M&M. The peanut is your content, the 
            chocolate coating is your presentation layer and 
            your JavaScript is the hard candy shell. 

            This layer can vary in color and the experience can 
            vary depending on the capabilities of the browser using it.

            Think of the candy shell as where many Progressive Web App 
            features can live. They are experiences that combine the best 
            of the web and the best of apps. They are useful to users 
            from the very first visit in a browser tab, no install required.

            As the user builds a relationship with these apps through repeat use, 
            they make the candy shell even sweeter - loading very fast on slow network 
            connections (thanks to service worker), sending relevant Push Notifications 
            and having a first-class icon on the user's home screen that can load them 
            as fullscreen app experiences. They can also take advantage of 
            smart web app install banners.
          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
  )
}


/*
 <CardMedia
        className={classes.media}
        image={`/jpg/cannatown.jpg`}
        title={`Cannatown`}
      />
*/
