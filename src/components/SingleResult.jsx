import React from 'react'
import { 
    useSelector,
} from 'react-redux'
import {
  Highlight,
} from 'react-instantsearch-dom'
import {
    makeStyles,
    Avatar,    
    ListItem,
    ListItemText,
    ListItemAvatar,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	singleResult: {
	},
    image:{
        width: 110,
        height: 110,
        margin: theme.spacing(),
        marginRight: theme.spacing(2),
    },
    white: {
        color: 'white',
    },
}))

export default function SingleResult(props) {

    const classes = useStyles()
    const appSlice = useSelector(state => state.app)
    const {
        language,
    } = appSlice
    const {hit} = props
    let image = hit.image
    let numberSeeds = hit.price.numberSeeds
    let price = numberSeeds
    if (!numberSeeds){
        price = `${hit.price.currency} ${hit.price.price}`
    } else {
        price = `${hit.price.currency} ${hit.price.price} (${numberSeeds} seeds)`
    }

    const plantHeight = hit.plantHeight.languages[language]
    const plantYield = hit.plantYield.languages[language]
    const type = hit.type.languages[language]


    const url = `${hit.url}?a_aid=cannastore`

	return	<ListItem 
                className={classes.singleResult}
                button
                onClick={(e) => {
                    e.preventDefault()
                     window.open(url, `_blank`)
                }}> 
                    <ListItemAvatar>
                        <Avatar src={ image } className={ classes.image } />
                    </ListItemAvatar>
    				<ListItemText 
                        disableTypography
    					primary={<React.Fragment>
                                        <Typography variant={`h6`}>
                                        <Highlight
                                            hit={hit}
                                            attribute={`title.languages.${language}`}
                                        />
                                    
                                    </Typography>
                                </React.Fragment>}
                        secondary={ <React.Fragment>
                                        <Typography variant={`body2`} gutterBottom className={classes.white}>
                                            <Highlight
                                                hit={hit}
                                                attribute={`metaDescription.languages.${language}`}
                                            />
                                        </Typography>

                                        <Typography variant={`body1`}>
                                            {type} {plantHeight} {plantYield} { price }
                                        </Typography>

                                    </React.Fragment>
                                    }  
    				/>
                    
                        

  			</ListItem>
}


/*
<MightyButton btn={{
                        label: `info`,
                        icon: `right`,
                        color: `primary`,
                        onClick:(e) => {
                            e.preventDefault()
                            console.log ('product')
                        },
                    }}/>
*/