function Model() {

    var container = new THREE.Object3D
    var mixer

    this.loadModel = function (url, callback) {

        var loader = new THREE.JSONLoader();

        loader.load(url, function (geometry) {

            // ładowanie modelu jak porzednio

            var modelMaterial = new THREE.MeshBasicMaterial(
                {
                    map: THREE.ImageUtils.loadTexture("gfx/kenny.png"),
                    morphTargets: true // odpowiada za animację materiału modelu
                });

            var meshModel = new THREE.Mesh(geometry, modelMaterial)
            meshModel.name = "name";
            meshModel.rotation.y = 0; // ustaw obrót modelu
            meshModel.position.y = 200; // ustaw pozycje modelu
            meshModel.scale.set(10, 10, 10); // ustaw skalę modelu

            //utworzenie mixera

            //mixer = new THREE.AnimationMixer(meshModel);
            //mixer.clipAction("run").play();
            //mixer.clipAction(oldaction).stop();
            //dodanie modelu do kontenera

            container.add(meshModel)

            // zwrócenie kontenera

            callback(container);

        });
    }


    // update mixera

    this.updateModel = function () {

        if (mixer) mixer.update(delta)
    }

    //animowanie postaci

    this.setAnimation = function () {

        mixer.clipAction("run").play();
    }

}