import { useContext } from "react"
import { LanguageContext } from "@ctx/LanguageContext"

const translates = {
	english: {

		// Common
		rights: "All rights reserved.",

		// Pages
		page_about: "About",
		page_login: "Login",
		page_join: "Join",
	},
}

export function Text( { name } ) {

	const [ language ] = useContext( LanguageContext )

	const untranslated = `:${ name }`

	if ( translates[ language ] ) {

		return <>
			{ translates[ language ][ name ] || untranslated }
		</>
	}

	return <>
		{ untranslated }
	</>
}
