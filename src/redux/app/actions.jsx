import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { getStore, getHistory } from '../../'

export const error = createAction(`APP/ERROR`)
export const path = createAction(`APP/PATH`)
export const themeChoice = createAction(`APP/THEME`)
export const navOpen = createAction(`APP/NAVOPEN`)
export const locale = createAction(`APP/LOCALE`)
export const localing = createAction(`APP/LOCALING`)
export const localed = createAction(`APP/LOCALED`)
export const language = createAction(`APP/LANGUAGE`)
export const langChanged = createAction(`APP/LANGUAGECHANGE`)
export const seed = createAction(`APP/SEED`)

export const getLocale = () => {
	// console.log ('getLocale')
	const store = getStore()
	store.dispatch({type: `APP/LOCALING`, localing: true })
	axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO_APIKEY}`)
	.then(function(response) {
		store.dispatch({ type: `APP/LOCALE`, locale: response.data })
	})
	.catch(function(error) {
		store.dispatch({ type: `APP/ERROR`, error: error.toString() })
	})
	.finally(function() {
		store.dispatch({type: `APP/LOCALING`, localing: false })
		store.dispatch({type: `APP/LOCALED`, localed: true })
	})	
}

export const changePath = path => {
	const store = getStore()
	const history = getHistory()
	store.dispatch({type: `APP/PATH`, path })
	history.push(path)
	window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return true
}


