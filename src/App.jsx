import React from 'react'
import { 
    useSelector,
} from 'react-redux'
import CannastoreLogo from './theme/jsx/CannastoreLogo'
import { getLocale } from './redux/app/actions'
import { 
    gsap, 
    Power2,
} from 'gsap'
import {
	MuiThemeProvider, 
	createMuiTheme,
} from '@material-ui/core/'
import {
	themeDark,
	themeLight,
} from './theme'
import { AppShell } from './components'

export default function App() {

	const [done, setDone] = React.useState(false)
	const appSlice = useSelector(state => state.app)
	const {
		themeChoice,
		localing,
		localed,
	} = appSlice
	let theme
	if (themeChoice === `dark`) theme = themeDark
	if (themeChoice === `light`) theme = themeLight
	

	React.useEffect(() => {
		const prerenderedDiv = document.getElementById("prerendered")
		prerenderedDiv.classList.remove (`maximised`)
		prerenderedDiv.classList.add (`minimised`)
		const bodyEl = document.getElementById("fs")
		bodyEl.classList.remove (`fs`)		
		setTimeout(() => {
					gsap.to(`#temp`, {
			        	onComplete: () => { 
			        		setDone(true) 
			        	},
				        ease: Power2.easeOut,
				        duration: 0.85,
				        rotationY: 140,
				        opacity: 0,
			    	}
			    )}, 750)

		if (!localed && !localing) getLocale()

	}, [localed, localing])

	if (done){
		return 	<MuiThemeProvider theme={createMuiTheme(theme)}>
					<AppShell />
				</MuiThemeProvider>
	}

	return	<div className={`maximised`} id={`temp`}>
				<div className="logoDiv">
					<CannastoreLogo style={{height: '150'}} color={`#8aff20`} />
				</div>
				<h1>The World's First<br />Cannabis Mobile App</h1>
			</div>
}

