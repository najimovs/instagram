import { useContext, useRef, useEffect } from "react"
import { useNavigate } from "react-router"
import { UserContext } from "@ctx/UserContext"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"

export default function() {

	const [ username, setUsername ] = useContext( UserContext )

	const usernameRef = useRef()

	const navigate = useNavigate()

	useEffect( () => {

		if ( username !== null ) {

			localStorage.setItem( "app_auth_username", username )

			navigate( "/" )
		}
		else {

			localStorage.removeItem( "app_auth_username" )
		}

	}, [ username ] )

	return (
		<>
			<Header />
			<main>

				<form onSubmit={ e => {

					e.preventDefault()

					const newUsername = usernameRef.current.value.trim().toLowerCase()

					setUsername( newUsername )
				} }>
					<input ref={ usernameRef } type="text" />
				</form>

			</main>
			<Footer />
		</>
	)
}
