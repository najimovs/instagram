import { useContext, useState, useEffect } from "react"
import { UserContext } from "@ctx/UserContext"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"

export function Newsfeed() {

	const [ username, setUsername ] = useContext( UserContext )

	const [ posts, setPosts ] = useState( [] )

	useEffect( () => {

		fetch( "/api/posts", {
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

				<div className="wrapper">
					<ul className="posts">
						{ posts.map( post => (
							<li key={ post._id }>
								<img src={ post.url } />
							</li>
						) ) }
					</ul>
				</div>
			</main>
			<Footer />
		</>
	)
}
