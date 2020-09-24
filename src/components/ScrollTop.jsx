import React from 'react'
import {
  CssBaseline,
  makeStyles,
  useScrollTrigger,
  Zoom,
  Fab,
  Container,
  Box,
  Typography,
  Toolbar,
  AppBar,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {

  const { children, window } = props
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar color={`secondary`}>
        <Toolbar>
          <Typography variant="h6">
            Scroll to see button
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab 
          color={`primary`} 
          size={`large`} 
          aria-label={`Scroll back to top`}>
          <Icon icon={`parent`} color={`inherit`} />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}
