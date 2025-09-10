import Fastify from "fastify"
import cors from "@fastify/cors"
import { posts } from "./posts.js"

const fastify = Fastify( {
	logger: false,
} )

await fastify.register( cors, {
	origin: true,
} )

fastify.get( "/posts", async function handler ( request, reply ) {

	const username = request.headers.app_auth_username

	if ( posts[ username ] ) {

		return posts[ username ]
	}

	return []
} )

fastify.get( "/health", async function handler ( request, reply ) {

	return { ok: true }
} )

try {

	await fastify.listen( { port: 3_000 } )
}
catch ( err ) {

	fastify.log.error( err )
	process.exit( 1 )
}
