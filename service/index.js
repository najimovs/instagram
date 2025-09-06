import Fastify from "fastify"

const fastify = Fastify( {
	logger: false,
} )

const posts = {
	alisher: [ 1, 2 ],
	sobitxon: [ 3, 4 ],
	asror: [ 5, 6, 7 ],
	fidarvs: [ 8, 9, 10 ],
	zarnigor: [ 11 ],
	javoxir: [],
}

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
