// jeden hexagon

function Hex() {

    var radius = 100 // wielkość hexagona, a tym samym całego labiryntu

    var container = new THREE.Object3D()
    /*
    var wall = new THREE.Mesh(geometry, material);

    for (var i = 0; i < 6; i++) {
        var side = wall.clone()
        side.position.x = 0;
        side.position.z = 0;
        side.lookAt(container.position)
        //container.add(side)

    }
    */
    var geometry = new THREE.BoxGeometry(100, 100, 20);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    container.add(cube)

    this.getHex = function () {
        return container
    }
}
