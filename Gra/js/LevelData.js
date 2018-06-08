function LevelData() {
    var obj =
        {
            "size": 5,
            "level": [
                {
                    "index": 0,
                    "x": 2,
                    "y": 2,
                    "dirOut": 1,
                    "type": "wall"
                },
                {
                    "index": 1,
                    "x": 3,
                    "y": 1,
                    "dirOut": 5,
                    "type": "wall",
                    "dirIn": 4
                },
                {
                    "index": 2,
                    "x": 2,
                    "y": 1,
                    "dirOut": 4,
                    "type": "wall",
                    "dirIn": 2
                },
                {
                    "index": 3,
                    "x": 1,
                    "y": 1,
                    "dirOut": 3,
                    "type": "wall",
                    "dirIn": 1
                },
                {
                    "index": 4,
                    "x": 1,
                    "y": 2,
                    "dirOut": 2,
                    "type": "wall",
                    "dirIn": 0
                }
            ]
        }


    this.getLevelData = function () {
        return obj;
    }
}