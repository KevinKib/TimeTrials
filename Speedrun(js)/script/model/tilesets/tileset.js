class Tileset {

    constructor(name, nbX, nbY, blocksize, separation) {
        this.name = name;
        this.nbBlocks = {x: nbX, y: nbY};
        this.blocksize = blocksize;
        this.separation = separation;
    }

    calculate(id) {
        id %= (this.nbBlocks.x * this.nbBlocks.y);

        let res = {xStart: 0, yStart: 0};

        res.xStart = (id % this.nbBlocks.x) * (this.blocksize + this.separation);
        res.yStart = Math.floor(id / this.nbBlocks.x) * (this.blocksize + this.separation);
        
        return res;
    }

}

module.exports.Tileset = Tileset;