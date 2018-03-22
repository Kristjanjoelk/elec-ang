export class Message {
    private getTime() {
        let value;
        var d = new Date(),
            h = (d.getHours()<10?'0':'') + d.getHours(),
            m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
            s = (d.getSeconds()<10?'0':'') + d.getSeconds();
        value = h + ':' + m + ':' + s;
        console.log('returning ', value);
        return value;
    }
    
    public date: any = this.getTime();

    constructor (public sender: string, public message: string) {}
}