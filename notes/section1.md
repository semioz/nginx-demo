## NGINX can be used both in layer 4(tcp) and layer 7(http, grcp)

### Layer 4 
* Source IP, Source port
* Destination IP, port
* Simple packet inspection

### Layer 7
* More context. More info about application
* HTTP, gRPC etc.
* We know where the client is going, which page it visited etc.
* Require decryption

* Layer 4 proxying is useful when Nginx doesn't understand the protocol.
* Layer 7 proxying is useful when nginx want to share backend connections and cache results.

## TLS 
* TLS is a way to establish end-to-end encryption between one another.
* Symmetric encrption is used for communication(client, server have the same key)

### TLS termination 
*  It's when Nginx handles the SSL/TLS encryption and decryption process.
* 1-)Nginx has TLS(HTTPS), backend not(HTTP)
* Then, nginx terminates TLS and decrypts and send unencrypted.
* 2-)Nginx is TLS, and backend is also TLS(HTTPS)
* Then, nginx terminated TLS, decrypted, optionally rewrite and then re-encrypt the content on the backend.

### TLS passthrough
* It's when Nginx forwards the encrypted HTTPS traffic directly to the backend server without decrypting
* Backend is TLS
* nginx proxies/streams the packets directly to the backend.
* just like tunnel
* the tls handshake is forwarded all the way to the backend
* no caching, l4 check only, but more secure, nginx doesnt need backend certificate

## NGINX Threading Architecture
* When the reverse proxy starts, it creates one thread per CPU core these worker threads do the heavy lifting.
* Number of worker threads are configurable
* nginx recommends using one thread per CPU core to avoid context switching and cache trashing.
