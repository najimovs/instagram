import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

export function LandingPage() {

	const [ , setUsername ] = useContext( UserContext )

	return (
		<>
			<Header />
			<main>
				<h1>LandingPage</h1>
				<button onClick={ () => setUsername( "aisha" ) }>Login</button>
			</main>
			<Footer />
		</>
	)
}
