import "./App.css"
import { useContext, useState } from "react"
import { Routes, Route } from "react-router"

// Import contexts
import { LanguageContext } from "./Contexts/LanguageContext"
import { UserContext } from "./Contexts/UserContext"
import { ThemeContext } from "./Contexts/ThemeContext"

// Import pages
import { Home } from "./Pages/Home/Home"

export function App() {

	const [ language, setLanguage ] = useState( "english" )
	const [ username, setUsername ] = useState( null )
	const [ theme, setTheme ] = useState( getCurrentTheme() )

	return <>
		<LanguageContext.Provider value={ [ language, setLanguage ] }>
			<UserContext.Provider value={ [ username, setUsername ] }>
				<ThemeContext.Provider value={ [ theme, setTheme ] }>
					<Routes>
						<Route path="/" element={ <Home /> } end />
					</Routes>
				</ThemeContext.Provider>
			</UserContext.Provider>
		</LanguageContext.Provider>
	</>
}

function getCurrentTheme() {

	const currentTheme = localStorage.getItem( "app_theme" )

	if ( currentTheme === null ) {

		return matchMedia( "(prefers-color-scheme: dark)" ).matches ? "dark" : "light"
	}

	return currentTheme
}
