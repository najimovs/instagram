import Fastify from "fastify"
import cors from "@fastify/cors"
import { MongoClient } from "mongodb"

// DB connection
const mongoDB = new MongoClient( process.env.MONGODB_URL )
await mongoDB.connect()

// Collections
const posts = mongoDB.db().collection( "posts" )

// Server
const fastify = Fastify( {
	logger: false,
} )

await fastify.register( cors, {
	origin: true,
} )

fastify.get( "/posts", async function handler ( request, reply ) {

	// const username = request.headers.app_auth_username

	return await posts.find().toArray()
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
