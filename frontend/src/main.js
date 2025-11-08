import "@app/main.css"

load()

async function load() {

	const response = await fetch( "/api/some-number" )

	console.log( await response.json() )
}
