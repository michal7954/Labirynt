// dane json levelu

function LevelData() {
    var obj =
        {
            "size": "3",
            "level": [
                {
                    "id": "0",
                    "x": "0",
                    "z": "0",
                    "dirOut": 2,
                    "dirIn": 5,
                    "type": "wall"
                },
                {
                    "id": "4",
                    "x": "1",
                    "z": "1",
                    "dirOut": 1,
                    "dirIn": 4,
                    "type": "enemy"
                }
            ]
        }

    this.getLevelData = function () {
        return obj
    }
}