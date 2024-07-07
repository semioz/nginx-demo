## Layer4-7 proxying in Websockets
* In layer 4, we see TCP/IP content obvs. connection, ports IPs etc. content remains encrypted.
* In layer 7, we see layer 4 + application layer content. content is decrypted.(tls termination) read headers, paths, urls.

### Layer 4 - websockets
* Layer 4 proxying in websockets is done as a tunnel.
* Any data sent on the frontend connection is tunneled to the backend connection.
* NGINX doesn't even understand that it's websocket connection
* Client sends Upgrade Connection --> Nginx --> Nginx sends upgraded connection to --> Backend
* Backend sends 101-switching protocols to nginx --> nginx --> client
* you have to adjust the timeouts cause nginx may close the connection if receives no data.

### Layer 7 - websockets
* Clients sends TLS handshake to nginx and nginx sends back its tls handshake function.
