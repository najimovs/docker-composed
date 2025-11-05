import "@app/main.css"

load()

async function load() {

	const json = await ( await fetch( "http://localhost:3000/some-number" ) ).json()

	console.log( json )
}
