function Level() {

    var level = new THREE.Object3D();
    var hexy = [];
    var data = new LevelData().getLevelData();
    var radius = new Settings().GetSettings().radius;
    this.campfires = []

    for (i = 0; i < data.level.length; i++) {
        new_hex = new Hex([data.level[i].dirOut, data.level[i].dirIn], data.level[i].type)
        hexy[i] = new_hex.getHex();
        if (data.level[i].type == "light") {
            fire = new_hex.updateCampfire();
            this.campfires.push(fire)
        }

        //hexy[i].rotation.y += 0.1
        hexy[i].position.x = data.level[i].x * radius * 344 / 200;
        if (data.level[i].x % 2 == 0) {
            hexy[i].position.z = -(data.level[i].y * 400 * radius / 200);
        }
        else {
            hexy[i].position.z = -(data.level[i].y * 400 * radius / 200 + radius);
        }
        level.add(hexy[i]);
        //level.rotation.y += (Math.PI / 4)

    }

    this.getLevel = function () {
        return level;
    }

    this.getHexy = function () {
        return hexy;
    }
}