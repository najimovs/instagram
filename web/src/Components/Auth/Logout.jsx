import { useContext } from "react"
import { UserContext } from "@ctx/UserContext"
import { Text } from "@components/Text/Text"

export function Logout() {

	const [ username, setUsername ] = useContext( UserContext )

	return (
		<button onClick={ () => {

			localStorage.removeItem( "app_auth_username" )

			setUsername( null )

		} }>
			<Text name="logout" username={ username } />
		</button>
	)
}
