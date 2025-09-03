import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { LandingPage } from "./LandingPage"
import { Newsfeed } from "./Newsfeed"

export function Home() {

	const [ username ] = useContext( UserContext )

	return (
		<>
			{ username && <Newsfeed /> }
			{ !username && <LandingPage /> }
		</>
	)
}
