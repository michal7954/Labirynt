function Level() {
    //tu wygeneruj meshe levelu na podstawie danych z poprzedniego pliku
    //i zwróć je do sceny

    var level = new THREE.Object3D();
    var hexy = [];
    var data = new LevelData().getLevelData();



    console.log(data)
    for (i = 0; i < data.level.length; i++) {
        hexy[i] = new Hex().getHex();

        hexy[i].position.x = data.level[i].x * 400
        if (data.level[i].x % 2 == 0) {
            hexy[i].position.z = data.level[i].y * 400
        }
        else {
            hexy[i].position.z = data.level[i].y * 400 + 200
        }
        level.add(hexy[i]);
    }


    this.getLevel = function () {
        return level;
    }
}