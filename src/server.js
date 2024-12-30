const { PORT } = require( "./constants" );
const http = require( 'http' );
const wsServer = require( "websocket" ).server;


const httpServer = http.createServer();

httpServer.listen( PORT, () => `Server is listening on port ${ PORT }` );
const gameWsServer = new wsServer( { httpServer } );

gameWsServer.on( "request", ( request ) =>
{
    const connection = request.accept( null, request.origin );
    connection.on( "open", () => console.log( "Connection opened" ) );
    connection.on( "close", () => console.log( "Connection closed" ) );
    connection.on( "message", ( message ) =>
    {
        console.log( `Received message from client: ${ message.utf8Data }` );
        connection.send( `Echo: ${ message.utf8Data }` );
    } );
} );