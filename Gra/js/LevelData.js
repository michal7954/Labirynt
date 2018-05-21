function LevelData() {
    var obj =
        {
            "size": 1,
            "level": [
                {
                    "index": 0,
                    "x": 1,
                    "y": 0,
                    "dirOut": 1,
                    "type": "wall"
                }
            ]
        }

    this.getLevelData = function () {
        return obj;
    }
}