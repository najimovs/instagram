import { useContext, useEffect } from "react"
import { LanguageContext } from "@ctx/LanguageContext"

export function Language() {

	const [ language, setLanguage ] = useContext( LanguageContext )

	useEffect( () => {

		localStorage.setItem( "app_language", language )

	}, [ language ] )

	return (
		<>
			<select
				onChange={ e => setLanguage( e.target.value ) }
				defaultValue={ language }
			>
				<option value="english">English</option>
				<option value="uzbek">O'zbekcha</option>
			</select>
		</>
	)
}
