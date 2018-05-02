function Player() {

    var container = new THREE.Object3D()

    var geometry = new THREE.BoxGeometry(200, 200, 200);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.y = 100;
    container.add(cube);

    var axes = new THREE.AxesHelper(200) // osie do kontroli kierunku ruchu
    container.add(axes)

    //funkcja zwracająca kontener
    this.getPlayerCont = function () {
        return container
    }

    //funkcja zwracająca playera
    this.getPlayerMesh = function () {
        return cube
    }

}