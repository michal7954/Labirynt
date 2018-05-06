function Doors() {

    var radius = new Settings().GetSettings().radius;

    var container = new THREE.Object3D()
    var geometry = new THREE.BoxGeometry(1.2 * radius, 0.1 * radius, 0.1 * radius);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    var el1 = new THREE.Mesh(geometry, material);
    el1.position.y = 0.4 * radius;
    container.add(el1)

    var el2 = new THREE.Mesh(geometry, material);
    el2.position.y = -0.48 * radius;
    container.add(el2)

    this.getDoors = function () {
        return container;
    }
}