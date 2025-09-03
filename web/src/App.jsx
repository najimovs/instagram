import "./App.css"
import { useContext, useState } from "react"
import { Routes, Route } from "react-router"
import { LanguageContext } from "./Contexts/LanguageContext"
import { text } from "./translate.js"

export function App() {

	const [ language, setLanguage ] = useState( "english" )

	return <>
		<LanguageContext.Provider value={ [ language, setLanguage ] }>
			<Routes>
				<Route path="/" element={ <Home /> } end />
			</Routes>
		</LanguageContext.Provider>
	</>
}

function Home() {

	return <>
		<Header />
		<Footer />
	</>
}

function Header() {

	const [ language ] = useContext( LanguageContext )

	return <header>
		<h1>{ text[ language ].welcome }</h1>
	</header>
}

function Footer() {

	const [ language, setLanguage ] = useContext( LanguageContext )

	return <footer>
		<select onChange={ e => setLanguage( e.target.value ) }>
			<option value="english">English</option>
			<option value="uzbek">O'zbekcha</option>
		</select>
		<p>{ text[ language ].rights }</p>
	</footer>
}
