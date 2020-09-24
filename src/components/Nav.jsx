import React from 'react'
import { 
    useSelector,
    // useDispatch,
} from 'react-redux'
import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
import { 
	changePath,
} from '../redux/app/actions'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles(theme => ({
}))

export default function Nav() {
	const classes = useStyles()
	// const dispatch = useDispatch()
	const appSlice = useSelector(state => state.app)
	const {
		language,
		languageChoices,
		locale,
	} = appSlice
	const {
		country_name,
	} = locale

	let choice = null
	for (let i=0; i<languageChoices.length; i++) {
      if (languageChoices[i].code === language){
        choice =  languageChoices[i]
      }
    }


	return	<List className={classes.none}> 
				
				<ListItem button
	            	onClick={(e) => {
	            		e.preventDefault()
	            		changePath(`/`)
	            	}}>
	              
	              <ListItemText 
	              	primary={`${choice.title}, ${country_name}`}
	              	secondary={choice.subheader}
	              />
	            </ListItem>

	            <ListItem button
	            	onClick={(e) => {
	            		e.preventDefault()
	            		changePath(`/find-out-more`)
	            	}}>
	              <ListItemIcon>
	              	<Icon icon={`next`} color={`primary`} />
	              </ListItemIcon>
	              <ListItemText 
	              	primary={`Find out more`}
	              />
	            </ListItem>

	            <ListItem button
	            	onClick={(e) => {
	            		e.preventDefault()
	            		changePath(`/message`)
	            	}}>
	              <ListItemIcon>
	              	<Icon icon={`pushtotalk`} color={`primary`} />
	              </ListItemIcon>
	              <ListItemText 
	              	primary={`Message Us`}
	              />
	            </ListItem>



	            

  			</List>
}


/*

<Divider />

	            <ListItem button
	            	onClick={(e) => {
	            		e.preventDefault()
	            		let newTheme = `light`
						if (themeChoice === `light`){
							newTheme = `dark`
						}
						dispatch({type:`APP/THEME`, themeChoice: newTheme})
	            	}}>
	              <ListItemIcon>
	              	<Icon icon={themeChoice === `light` ? `dark` : `light`} color={`primary`} />
	              </ListItemIcon>
	              <ListItemText 
	              	primary={themeChoice === `light` ? `Dark` : `Light`} 
	              />
	            </ListItem>
*/