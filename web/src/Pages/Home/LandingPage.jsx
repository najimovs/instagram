import { useContext } from "react"
import { UserContext } from "@ctx/UserContext"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"

export function LandingPage() {

	const [ , setUsername ] = useContext( UserContext )

	return (
		<>
			<Header />
			<main>
				{/*<h1>LandingPage</h1>*/}
				{/*<button onClick={ () => setUsername( "aisha" ) }>Login</button>*/}
			</main>
			<Footer />
		</>
	)
}
