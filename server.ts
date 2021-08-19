export class Server {

    host: string;
    port: number;

    constructor(host: string = '0.0.0.0', port: number = 8080) {
        this.host = host;
        this.port = port;
    }

}
