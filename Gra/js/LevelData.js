function LevelData() {
    var obj =
        {
            "size": 19,
            "level": [
                {
                    "index": 0,
                    "x": 4,
                    "y": 4,
                    "dirOut": 0,
                    "type": "light"
                },
                {
                    "index": 1,
                    "x": 4,
                    "y": 3,
                    "dirOut": 2,
                    "type": "wall",
                    "dirIn": 3
                },
                {
                    "index": 2,
                    "x": 5,
                    "y": 3,
                    "dirOut": 3,
                    "type": "wall",
                    "dirIn": 5
                },
                {
                    "index": 3,
                    "x": 5,
                    "y": 4,
                    "dirOut": 4,
                    "type": "light",
                    "dirIn": 0
                },
                {
                    "index": 4,
                    "x": 4,
                    "y": 5,
                    "dirOut": 5,
                    "type": "wall",
                    "dirIn": 1
                },
                {
                    "index": 5,
                    "x": 3,
                    "y": 4,
                    "dirOut": 0,
                    "type": "wall",
                    "dirIn": 2
                },
                {
                    "index": 6,
                    "x": 3,
                    "y": 3,
                    "dirOut": 0,
                    "type": "light",
                    "dirIn": 3
                },
                {
                    "index": 7,
                    "x": 3,
                    "y": 2,
                    "dirOut": 1,
                    "type": "wall",
                    "dirIn": 3
                },
                {
                    "index": 8,
                    "x": 4,
                    "y": 2,
                    "dirOut": 2,
                    "type": "wall",
                    "dirIn": 4
                },
                {
                    "index": 9,
                    "x": 5,
                    "y": 2,
                    "dirOut": 2,
                    "type": "wall",
                    "dirIn": 5
                },
                {
                    "index": 10,
                    "x": 6,
                    "y": 3,
                    "dirOut": 3,
                    "type": "light",
                    "dirIn": 5
                },
                {
                    "index": 11,
                    "x": 6,
                    "y": 4,
                    "dirOut": 3,
                    "type": "wall",
                    "dirIn": 0
                },
                {
                    "index": 12,
                    "x": 6,
                    "y": 5,
                    "dirOut": 4,
                    "type": "wall",
                    "dirIn": 0
                },
                {
                    "index": 13,
                    "x": 5,
                    "y": 5,
                    "dirOut": 4,
                    "type": "wall",
                    "dirIn": 1
                },
                {
                    "index": 14,
                    "x": 4,
                    "y": 6,
                    "dirOut": 5,
                    "type": "wall",
                    "dirIn": 1
                },
                {
                    "index": 15,
                    "x": 3,
                    "y": 5,
                    "dirOut": 5,
                    "type": "wall",
                    "dirIn": 2
                },
                {
                    "index": 16,
                    "x": 2,
                    "y": 5,
                    "dirOut": 0,
                    "type": "wall",
                    "dirIn": 2
                },
                {
                    "index": 17,
                    "x": 2,
                    "y": 4,
                    "dirOut": 0,
                    "type": "light",
                    "dirIn": 3
                },
                {
                    "index": 18,
                    "x": 2,
                    "y": 3,
                    "dirOut": 1,
                    "type": "wall",
                    "dirIn": 3
                }
            ]
        }


    this.getLevelData = function () {
        return obj;
    }
}