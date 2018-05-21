function Vector(start, stop) {

    var data = start + " : " + stop;
    var container = new THREE.Object3D;

    var geometry = new THREE.Geometry();
    geometry.vertices.push(start);
    geometry.vertices.push(stop);
    var material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    var line = new THREE.Line(geometry, material);
    //scene.add(line);

    this.getData = function () {
        return data;
    }

    this.getContainer = function () {
        return line;
    }
}