class LevelSerializer {

    constructor(level) {
        this.level = level;
    }

    save() {

        const Level_Serializable =  {
            blockList   : this.level.blockList,
            bgoList     : this.level.bgoList,
            entityList  : this.level.entityList
        };

        let save = JSON.stringify(Level_Serializable, null, " ");

        const fs = require("fs");
        fs.writeFileSync("saves/"+this.level.name+".json", save);

    }

    load() {

        const fs = require("fs");
        let load = fs.readFileSync("saves/"+this.level.name+".json");

        let level = JSON.parse(load);
        this.level.blockList = level.blockList;
        this.level.bgoList = level.bgoList;
        this.level.entityList = level.entityList;

    }

}

module.exports.LevelSerializer = LevelSerializer;