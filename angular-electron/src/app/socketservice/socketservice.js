import io from 'socket.io-client';

export class SocketService {
    constructor() {
      this.socket = null;
    }
  
    connect() {
        var sock = io('http://localhost:3123');
        return sock;
        // this.socket = io('http://localhost:3123');
        // this.socket.on('connect', () => {
        //     console.log('connected!');
        // });
    }
};
