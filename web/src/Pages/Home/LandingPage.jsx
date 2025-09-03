import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

export function LandingPage() {

	const [ , setUsername ] = useContext( UserContext )

	return (
		<>
			<h1>LandingPage</h1>
			<button onClick={ () => setUsername( "aisha" ) }>Login</button>
		</>
	)
}
