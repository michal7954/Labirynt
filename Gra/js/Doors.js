function Doors() {

    var radius = new Settings().GetSettings().radius;

    var geometry = new THREE.BoxGeometry(1.2 * radius, 0.2 * radius, 0.1 * radius);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    var el = new THREE.Mesh(geometry, material);
    el.position.y = 0.3 * radius;

    this.getDoors = function () {
        return el;
    }
}