import { useContext } from "react"
import { UserContext } from "@ctx/UserContext"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"

export function Newsfeed() {

	const [ username, setUsername ] = useContext( UserContext )

	return (
		<>
			<Header />
			<main>
				<h1>Newsfeed</h1>
				<button onClick={ () => {

					localStorage.removeItem( "app_auth_username" )

					setUsername( null )

				} }>Logout ({ username } )</button>
			</main>
			<Footer />
		</>
	)
}
