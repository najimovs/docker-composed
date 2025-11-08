import express from "express"
import cors from "cors"
import { Pool } from "pg"

const pool = new Pool( {
	user: "postgres",
	password: "postgres",
	host: "db",
	port: 5432,
	database: "mydb",
} )

const app = express()

app.use( cors() )

app.get( "/health", ( _ ,res ) => res.send( { message: "OK" } ) )
app.get( "/some-number", async ( _ ,res ) => {

	const data = await pool.query( "SELECT 1 number" )

	res.send( data.rows )
} )

app.listen( 3_000, () => console.info( ":3000" ) )
