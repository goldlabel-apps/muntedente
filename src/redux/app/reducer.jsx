import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"
import {
  path,
  themeChoice,
  navOpen,
  locale,
  localing,
  localed,
  language,
  langChanged,
  seed,
} from "./actions"

export const appSlice = {
  pJSON,
  navOpen: false,
  seed: null,
  themeChoice: 'dark',
  path: null,
  locale: null,
  localing: false,
  localed: false,
  langChanged: false,
  language: `en`,
  languageChoices: [
      { 
        code: "en", 
        translation: "In English", 
        title: `Welcome to Cannastore`,
        subheader: `The world's first Cannabis Mobile App`,
      },
      { 
        code: "nl", 
        translation: "In het Nederlands", 
        title: `Welkom bij Cannastore`,
        subheader: `De eerste mobiele Cannabis-app ter wereld`,
      },
      { 
        code: "fr", 
        translation: "En français", 
        title: `Bienvenue chez Cannastore`,
        subheader: `La première application mobile de cannabis au monde`,
      },
      { 
        code: "es", 
        translation: "En español", 
        title: `Bienvenido a Cannastore`,
        subheader: `La primera aplicación móvil de cannabis del mundo`,
      },
      { 
        code: "de", 
        translation: "Auf Deutsch", 
        title: `Willkommen im Cannastore`,
        subheader: `Die weltweit erste Cannabis Mobile App`,
      },
  ]
}

const appReducer = createReducer(appSlice, {

  [seed]: (state, action) => {
    state.seed = action.seed
    return state
  },

  [language]: (state, action) => {
    state.language = action.language
    return state
  },

  [langChanged]: (state, action) => {
    state.langChanged = action.langChanged
    return state
  },

  [locale]: (state, action) => {
    state.locale = action.locale
    return state
  },

  [localing]: (state, action) => {
    state.localing = action.localing
    return state
  },

  [localed]: (state, action) => {
    state.localed = action.localed
    return state
  },

  [navOpen]: (state, action) => {
    state.navOpen = action.navOpen
    return state
  },

  [themeChoice]: (state, action) => {
    state.themeChoice = action.themeChoice
    return state
  },
  
  [path]: (state, action) => {
    state.path = action.path
    return state
  },

})

export { appReducer }