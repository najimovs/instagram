import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

export function Newsfeed() {

	const [ username, setUsername ] = useContext( UserContext )

	return (
		<>
			<Header />
			<main>
				<h1>Newsfeed</h1>
				<button onClick={ () => setUsername( null ) }>Logout ({ username } )</button>
			</main>
			<Footer />
		</>
	)
}
