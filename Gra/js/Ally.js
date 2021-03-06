function Ally() {

    var container = new THREE.Object3D
    var mixer
    var radius = new Settings().GetSettings().radius;

    this.loadModel = function (url, callback) {

        var loader = new THREE.JSONLoader();

        loader.load(url, function (geometry) {

            var modelMaterial = new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture("gfx/kenny.png"),
                morphTargets: true
            });

            var meshModel = new THREE.Mesh(geometry, modelMaterial)
            meshModel.name = "name";
            meshModel.rotation.y = -Math.PI / 2;
            meshModel.position.y = 60 * radius / 200;
            meshModel.scale.set(2, 2, 2);

            mixer = new THREE.AnimationMixer(meshModel);
            mixer.clipAction("stand").play();

            container.add(meshModel)

            var geometry = new THREE.RingGeometry(30, 40, 7);
            var material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.rotateX(Math.PI / 2)
            mesh.visible = false;
            container.add(mesh);

            callback(container);
        });
    }

    // update mixera
    var delta = 0.04;
    this.updateModel = function () {
        if (mixer) mixer.update(delta)
    }

    //animowanie postaci
    this.setAnimation = function () {
        mixer.clipAction("run").play();
    }
    this.resetAnimation = function () {
        mixer.clipAction("run").stop();
    }
}