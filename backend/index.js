import express from "express"

const app = express()

app.get( "/health", ( _ ,res ) => res.send( { message: "OK" } ) )
app.get( "/some-number", ( _ ,res ) => res.send( [ 1 ] ) )

app.listen( 3_000, () => console.info( ":3000" ) )
