import React from 'react'
import clsx from 'clsx'
import { getAlgolia } from '../'
import '../theme/algolia.css'
import {
  InstantSearch,
  Hits,
  SearchBox,
} from 'react-instantsearch-dom'
import {
  CssBaseline,
  makeStyles,
  useScrollTrigger,
  Zoom,
  Fab,
  Toolbar,
  AppBar,
  Grid,
  List,
} from '@material-ui/core/'
import { Icon } from '../theme'

import { 
  SingleResult,
  Welcome,
} from './'

const useStyles = makeStyles((theme) => ({
  appShell: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appbarBg:{
    border: 'none',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  gridItem:{
  },
  searchBox:{
    marginLeft: theme.spacing(3.5),
  },
  titleTxt:{
    // border: '1px solid blue',
    // color: theme.palette.secondary.main,
  },
  vSpace:{
    height: 100,
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
      <div onClick={handleClick} role="presentation" className={classes.appShell}>
        {children}
      </div>
    </Zoom>
  )
}

export default function AppShell(props) {
  
  const classes = useStyles()
  // const theme = useTheme()
  const algolia = getAlgolia()

  return <React.Fragment>
          <InstantSearch 
                    searchClient={algolia} 
                    indexName={`seeds`}>
            <CssBaseline />

            <AppBar color={`secondary`} className={clsx(classes.appbarBg)}>
              <Toolbar>

                <Grid container className={clsx(classes.none)}>

                  <Grid item className={clsx(classes.none)}>
                    <Welcome />
                  </Grid>

                  <Grid item className={clsx(classes.grow)} />
                 

                  <Grid item className={clsx(classes.none)}>
                    <div className={clsx(classes.searchBox)}>
                      <SearchBox
                        autoFocus
                        showLoadingIndicator
                        translations={{
                          resetTitle: 'Start over',
                          placeholder: 'Find seeds',
                        }}
                      />
                      </div>
                  </Grid>

                </Grid>
              </Toolbar>
            </AppBar>

            <Toolbar id={`back-to-top-anchor`} />

            <div className={clsx(classes.vSpace)} />
            
            <List dense>
                <Hits hitComponent={SingleResult} />
            </List>

            <ScrollTop {...props}>
              <Fab 
                color={`primary`} 
                size={`large`} 
                aria-label={`Scroll back to top`}>
                <Icon icon={`parent`} color={`inherit`} />
              </Fab>
            </ScrollTop>

      </InstantSearch>

    </React.Fragment>
}


/*
*/