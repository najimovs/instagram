import "./App.css"
import { useContext, useState } from "react"
import { Routes, Route } from "react-router"

// Import contexts
import { LanguageContext } from "./Contexts/LanguageContext"
import { UserContext } from "./Contexts/UserContext"
import { ThemeContext } from "./Contexts/ThemeContext"

// Import pages
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Login from "./Pages/Login/Login"
import Join from "./Pages/Join/Join"

export function App() {

	const [ language, setLanguage ] = useState( getCurrentLanguage() )
	const [ username, setUsername ] = useState( getCurrentUsername() )
	const [ theme, setTheme ] = useState( getCurrentTheme() )

	return <>
		<LanguageContext.Provider value={ [ language, setLanguage ] }>
			<UserContext.Provider value={ [ username, setUsername ] }>
				<ThemeContext.Provider value={ [ theme, setTheme ] }>
					<Routes>
						<Route path="/" element={ <Home /> } end />
						<Route path="/about" element={ <About /> } end />
						<Route path="/login" element={ <Login /> } end />
						<Route path="/join" element={ <Join /> } end />
					</Routes>
				</ThemeContext.Provider>
			</UserContext.Provider>
		</LanguageContext.Provider>
	</>
}

function getCurrentLanguage() {

	const currentLanguage = localStorage.getItem( "app_language" )

	if ( currentLanguage === null ) {

		return "english"
	}

	return currentLanguage
}

function getCurrentTheme() {

	const currentTheme = localStorage.getItem( "app_theme" )

	if ( currentTheme === null ) {

		return matchMedia( "(prefers-color-scheme: dark)" ).matches ? "dark" : "light"
	}

	return currentTheme
}

function getCurrentUsername() {

	return localStorage.getItem( "app_auth_username" )
}
