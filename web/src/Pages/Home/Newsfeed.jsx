import { useContext, useState, useEffect } from "react"
import { UserContext } from "@ctx/UserContext"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"

export function Newsfeed() {

	const [ username, setUsername ] = useContext( UserContext )

	const [ posts, setPosts ] = useState( [] )

	useEffect( () => {

		fetch( "http://localhost:3000/posts", {
			headers: {
				"app_auth_username": username,
			},
		} )
		.then( r => r.json() )
		.then( json => setPosts( json ) )
		.catch( err => console.log( err ) )

	}, [] )

	return (
		<>
			<Header />
			<main>
				<h1>Newsfeed</h1>

				<ul>
					{ posts.map( ( post, i ) => (
						<li key={ i }>{ post }</li>
					) ) }
				</ul>

				<button onClick={ () => {

					localStorage.removeItem( "app_auth_username" )

					setUsername( null )

				} }>Logout ({ username } )</button>
			</main>
			<Footer />
		</>
	)
}
