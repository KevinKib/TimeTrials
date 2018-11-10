class GameProperties {

    static blocksize() {
        return 32;
    }

    static gridToFloat(x) {
        return (x-1)*this.blocksize();
    }
    
    static floatToGrid(x) {
        return (x/this.blocksize())+1;
    }

}

module.exports.GameProperties = GameProperties;