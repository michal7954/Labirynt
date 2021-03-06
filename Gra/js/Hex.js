function Hex(tab, type) {

    var radius = new Settings().GetSettings().radius;
    var container = new THREE.Object3D()
    var side = [];

    var geometry = new THREE.BoxGeometry(1.2 * radius, 0.85 * radius, 0.1 * radius);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var wall = new THREE.Mesh(geometry, material);

    for (var i = 0; i < 6; i++) {
        if (tab[0] == i) {
            side[i] = new Doors().getDoors();
            side[i].position.x = Math.sin(Math.PI / 3 * i) * radius;
            side[i].position.z = Math.cos(Math.PI / 3 * i) * radius;
            side[i].lookAt(container.position)

            container.add(side[i])
        }
        else if (tab[1] == i) {
            side[i] = new Doors().getDoors();
            side[i].position.x = Math.sin(Math.PI / 3 * i) * radius;
            side[i].position.z = Math.cos(Math.PI / 3 * i) * radius;
            side[i].lookAt(container.position)

            container.add(side[i])
        }
        else {
            side[i] = wall.clone()
            side[i].position.x = Math.sin(Math.PI / 3 * i) * radius;
            side[i].position.z = Math.cos(Math.PI / 3 * i) * radius;
            side[i].lookAt(container.position)
            //side[i].rotation.x += 1
            container.add(side[i])
        }
    }

    if (type == "light") {
        new_fire = new Fire()
        campfire = new_fire.getFire();
        campfire.position.set(0, 0, 0)
        container.add(campfire);

        this.updateCampfire = function () {
            return new_fire;
        }

        this.getFire = function () {
            return campfire
        }
    }






    this.getHex = function () {
        return container
    }
}
