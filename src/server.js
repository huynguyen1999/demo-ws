const { PORT } = require( "./constants.js" );
const http = require( "http" );
const WebSocketServer = require( "websocket" ).server;

// Create an HTTP server
const httpServer = http.createServer();

// Start the HTTP server and log when it's listening
httpServer.listen( PORT, () =>
{
    console.log( `Server is listening on port ${ PORT }` );
} );

// Create a WebSocket server and attach it to the HTTP server
const gameWsServer = new WebSocketServer( { httpServer } );

gameWsServer.on( "request", ( request ) =>
{
    const connection = request.accept( null, request.origin );

    console.log( "Client connected" );

    // Event: Connection opened
    connection.on( "open", () =>
    {
        console.log( "Connection opened" );
    } );

    // Event: Connection closed
    connection.on( "close", () =>
    {
        console.log( "Connection closed" );
    } );

    // Event: Message received
    connection.on( "message", ( message ) =>
    {
        if ( message.type === "utf8" )
        {
            console.log( `Received message from client: ${ message.utf8Data }` );
            connection.sendUTF( `Echo: ${ message.utf8Data }` );
        }
    } );
} );