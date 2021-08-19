export class Server {

    host: string;
    port: number;

    listener?: Deno.Listener;

    constructor(host: string = '0.0.0.0', port: number = 8080) {
        this.host = host;
        this.port = port;
    }

    async start() {
        this.listener = Deno.listen({
            hostname: this.host,
            port: this.port
        });

        while(true) {
            const connection = await this.listener.accept();
            
            // handle connection
        }
    }

}
