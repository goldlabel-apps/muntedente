import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    ButtonBase,
    Grid,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles(theme => ({
	btnBase: {
		margin: theme.spacing(),
		border: '1px dashed rgba(138, 255, 32, 0.5)',
		borderRadius: theme.spacing(0.5),
		padding: theme.spacing(),
		textTransform: 'uppercase',
	},
	btnBasefW: {
		width: '100%',
		
	},
	hSpace: {
		marginLeft: theme.spacing(0.5),
		marginRight: theme.spacing(0.5),
	},
	mBtn: {
		width: '100%',
	},
	mBtnLabel: {
		paddingTop: theme.spacing(0.66),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(),
	},
	mBtnIcon: {
		paddingLeft: theme.spacing(),
	},
	link:{
		cursor: 'pointer',
	},
}))

export default function MightyButton(props) {

	const classes = useStyles()
	const {
		fullWidth,
		label,
		icon,
		color,
		onClick,
	} = props.btn

	return	<ButtonBase 
				className={clsx(classes.btnBase, fullWidth ? classes.btnBasefW : null)}
				onClick={onClick}
			> 
			<div className={fullWidth ? classes.mBtn : null }>
				<Grid container>
					<Grid item className={classes.mBtnIcon}>
						<Icon icon={icon} color={color}/>
					</Grid>
					<Grid item className={classes.mBtnLabel}>
						{ label }
					</Grid>
				</Grid>
				</div>
  			</ButtonBase>
}