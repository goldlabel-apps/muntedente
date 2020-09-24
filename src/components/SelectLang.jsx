import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
	withStyles,
    makeStyles,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	language:{
	},
	iconBtn: {
	},
	avatar:{
		width: 32,
		height: 32,
		
	},
}))

const StyledMenu = withStyles({
  paper: {
    
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}

    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)



export default function SelectLang() {
	
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)
	const dispatch = useDispatch()

	
	const openMenu = (e) => {
		setAnchorEl(e.currentTarget)
	}

	const closeMenu = () => {
		setAnchorEl(null)
	}

	const appSlice = useSelector(state => state.app)
	const {
		language,
		langChanged,
		languageChoices,
		locale,
	} = appSlice


	return	<div className={classes.language}> 
				<IconButton onClick={openMenu} className={classes.iconBtn} >
	            	<Avatar src={!langChanged ? `/svg/flags/${locale.country_code2.toLowerCase()}.svg` : `/svg/flags/${language}.svg`} 
	            	/>
	            </IconButton>
	            <StyledMenu
			        id="customized-menu"
			        anchorEl={anchorEl}
			        keepMounted
			        open={Boolean(anchorEl)}
			        onClose={closeMenu}
			      >
			      {languageChoices.map((item, i) => {
			      	return <StyledMenuItem 
			      				key={`choice_${i}`}
			      				onClick={(e) => {
			      					e.preventDefault()
			      					// console.log (item)
			      					dispatch({type: `APP/LANGUAGE`, language: item.code})
			      					dispatch({type: `APP/LANGUAGECHANGE`, langChanged: true})
			      					closeMenu()
			      				}}
			      			>
								<ListItemIcon>
				          			<Avatar src={`/svg/flags/${item.code}.svg`} />
				          		</ListItemIcon>
				          		<ListItemText 
				          			primary={item.translation}
				          		/>
			      			</StyledMenuItem>
			      })}
			      </StyledMenu>
  			</div>
}





/*
	<pre>{ JSON.stringify(locale, null, 2) }</pre>
*/