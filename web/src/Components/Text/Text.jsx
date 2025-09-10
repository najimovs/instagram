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

		// Buttons
		logout: "Logout",
	},
}

export function Text( props ) {

	const [ language ] = useContext( LanguageContext )

	const untranslated = `:${ props.name }`

	if ( translates[ language ] ) {

		if ( props.name === "logout" && props.username ) {

			return <>
				{ translates[ language ][ props.name ] || untranslated } ( { props.username } )
			</>
		}

		// Common
		return <>
			{ translates[ language ][ props.name ] || untranslated }
		</>
	}

	return <>
		{ untranslated }
	</>
}
