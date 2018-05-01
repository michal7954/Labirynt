// dane json levelu

function LevelData() {
    var obj =
        {
            "size": 10,
            "level": [
                {
                    "index": 0,
                    "x": 0,
                    "y": 0,
                    "dirOut": 3,
                    "type": "wall"
                },
                {
                    "index": 1,
                    "x": 0,
                    "y": 1,
                    "dirOut": 3,
                    "type": "wall",
                    "dirIn": 0
                },
                {
                    "index": 2,
                    "x": 0,
                    "y": 2,
                    "dirOut": 3,
                    "type": "wall",
                    "dirIn": 0
                },
                {
                    "index": 3,
                    "x": 0,
                    "y": 3,
                    "dirOut": 2,
                    "type": "wall",
                    "dirIn": 0
                },
                {
                    "index": 4,
                    "x": 1,
                    "y": 3,
                    "dirOut": 1,
                    "type": "wall",
                    "dirIn": 5
                },
                {
                    "index": 5,
                    "x": 2,
                    "y": 3,
                    "dirOut": 0,
                    "type": "wall",
                    "dirIn": 4
                },
                {
                    "index": 6,
                    "x": 2,
                    "y": 2,
                    "dirOut": 0,
                    "type": "wall",
                    "dirIn": 3
                },
                {
                    "index": 7,
                    "x": 2,
                    "y": 1,
                    "dirOut": 0,
                    "type": "wall",
                    "dirIn": 3
                },
                {
                    "index": 8,
                    "x": 3,
                    "y": 0,
                    "dirOut": 1,
                    "type": "wall",
                    "dirIn": 3
                },
                {
                    "index": 9,
                    "x": 4,
                    "y": 0,
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