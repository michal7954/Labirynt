function Fire() {
    var fireTable = []
    var skala = [];
    var speed = [1, 3.5, 1.5, 4, 2, 3, 2.5];
    var campfireCounter = 100
    var container = new THREE.Object3D();
    var material = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 1,
        depthWrite: false,
        blending: THREE.AdditiveBlending // kluczowy element zapewniający mieszanie kolorów poszczególnych cząsteczek
    });

    var pointLight = new THREE.PointLight(0xff6600, 1, 100);
    container.add(pointLight)

    var geometry = new THREE.BoxGeometry(3, 3, 3)

    for (var i = 0; i < campfireCounter; i++) {
        var particle = new THREE.Mesh(geometry, material.clone());
        fireTable.push(particle)
        skala[i] = Math.floor((Math.random() * 5) + 1);
        particle.scale.set(skala[i], skala[i], skala[i])
        container.add(particle)
        fireTable[i].position.x = Math.floor((Math.random() * 30) + 0)
        fireTable[i].position.z = Math.floor((Math.random() * 30) + 0)
    }

    this.getFire = function () {
        return container
    }

    this.updateFire = function () {
        //console.log(fireTable)
        for (var i = 0; i < campfireCounter; i++) {
            fireTable[i].position.y += speed[Math.floor((Math.random() * speed.length) + 0)];
            fireTable[i].material.opacity -= 0.045;
            //console.log(fireTable[i].material.opacity)
            if (fireTable[i].position.y >= 80) {
                fireTable[i].position.y = Math.floor((Math.random() * speed.length) + 0)
                fireTable[i].material.opacity = 1;
            }
        }
    }

}