## Frontend timeouts
* client_header_timeout: Defines a timeout for reading client request header. If the client doesn't transmit the entire header within this time, request will be terminated with the 408(req timeout error) Default 60s.

* client_body_timeout: Specifies how long Nginx will wait for the client to send the request body (for example, when uploading a file). If the client does not send the entire request body within this time frame, Nginx closes the connection. A timeout for reading client req body. 408(req timeout error) Default 60s.

* send_timeout: sets the maximum time Nginx will wait for the response to be sent to the client. If data cannot be sent within this time, the connection is closed.

* keepalive_timeout:  When a client makes a request to Nginx and Nginx responds, it can keep the TCP connection open for a certain period (keepalive_timeout) to allow subsequent requests to reuse the same connection, avoiding the overhead of establishing new connections. This timeout specifies how long Nginx will keep the connection open if the client does not make another request within this time frame.

* lingering_timeout: This directive specifies the max. waiting time for more client data to arrive. if data aren't received during this time, the connection is closed.  it can choose to keep the TCP connection open for a certain period, allowing the client to potentially send additional requests over the same connection

* resolver_timeout: maximum time Nginx will wait for a response from the DNS server(s) specified in the resolver directive. If the DNS server(s) do not respond within this timeout period, Nginx will consider the DNS resolution as failed. resolver 8.8.8.8 8.8.4.4; resolver_timeout 5s;

## Backend timeouts
* proxy_connect_timeout: defines a timeout for establishing the connection with a proxied server. it can't usually exceed 75 seconds.

* proxy_send_timeout: specifies how long Nginx will wait when sending data to the upstream server. If the upstream server does not acknowledge receipt of data within this time, Nginx considers the connection to the upstream server as failed.

* proxy_read_timeout: When Nginx is acting as a reverse proxy and sends a request to another server (upstream server), this timeout specifies how long Nginx will wait for the response from the upstream server. If no data is received within this time, Nginx closes the connection to the upstream server.

* proxy_next_upstream_timeout: When Nginx is configured to proxy requests to multiple upstream servers (often used for load balancing or failover purposes), proxy_next_upstream_timeout specifies the amount of time Nginx should wait before attempting to connect to the next server in the upstream group after a timeout occurs with the current server. when the current upstream server fails to respond within the proxy_connect_timeout or proxy_read_timeout.

* keep_alive:  Configuring how long the backend server will keep a connection open (keep-alive timeout) after sending a response to the client (in this case, Nginx). This setting prevents the backend server from keeping idle connections open indefinitely, thereby conserving resources.