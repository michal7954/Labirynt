// jeden hexagon

function Hex() {

    var radius = 200 // wielkość hexagona, a tym samym całego labiryntu

    var container = new THREE.Object3D()

    var geometry = new THREE.BoxGeometry(1.2 * radius, 0.75 * radius, 0.1 * radius);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var wall = new THREE.Mesh(geometry, material);
    var side = [];

    for (var i = 0; i < 6; i++) {
        side[i] = wall.clone()
        side[i].position.x = Math.sin(Math.PI / 3 * i) * radius;
        side[i].position.z = Math.cos(Math.PI / 3 * i) * radius;
        side[i].lookAt(container.position)
        container.add(side[i])
    }

    this.getHex = function () {
        return container
    }
}
