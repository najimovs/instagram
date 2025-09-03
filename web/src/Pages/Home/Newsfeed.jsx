import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

export function Newsfeed() {

	const [ username, setUsername ] = useContext( UserContext )

	return (
		<>
			<h1>Newsfeed</h1>
			<button onClick={ () => setUsername( null ) }>Logout ({ username } )</button>
		</>
	)
}
