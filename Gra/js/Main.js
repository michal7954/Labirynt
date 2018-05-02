$(document).ready(function () {

    var raycaster = new THREE.Raycaster();
    var mouseVector = new THREE.Vector2();
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.position.set(800, 800, 800);
    camera.lookAt(scene.position);

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x808080);
    renderer.setSize(window.innerWidth, window.innerHeight);
    $("body").append(renderer.domElement);

    var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    /*
    orbitControl.addEventListener('change', function () {
        renderer.render(scene, camera)
    });
    */

    var axes = new THREE.AxesHelper(1000);
    scene.add(axes);

    var geometry = new THREE.PlaneGeometry(8000, 8000, 128, 128);
    var material = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide, wireframe: true });
    var plane = new THREE.Mesh(geometry, material);
    plane.rotateX(Math.PI / 2)
    scene.add(plane);

    var geometry = new THREE.TorusBufferGeometry(60, 30, 10, 50);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    var torus = new THREE.Mesh(geometry, material);
    torus.rotateX(Math.PI / 2)
    torus.position.y = 30
    scene.add(torus);

    var player = new Player()
    var cont = player.getPlayerCont();
    cont.position.set(200, 0, 200)
    scene.add(cont)


    var clickedVect = new THREE.Vector3(0, 0, 0); // wektor określający punkt kliknięcia
    var directionVect = new THREE.Vector3(0, 0, 0); // wektor określający kierunek ruchu playera

    $(document).mousedown(function (event) {

        mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
        mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;

        raycaster.setFromCamera(mouseVector, camera);
        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            clickedVect = intersects[0].point
            console.log(clickedVect)
            directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize()
            console.log(directionVect)
            //funkcja normalize() przelicza współrzędne x,y,z wektora na zakres 0-1
            //jest to wymagane przez kolejne funkcje

            torus.position.set(clickedVect.x, 30, clickedVect.z)

            var angle = Math.atan2(
                player.getPlayerCont().position.clone().x - clickedVect.x,
                player.getPlayerCont().position.clone().z - clickedVect.z
            )

            player.getPlayerMesh().rotation.y = angle
        }
    })

    function render() {
        if (Math.abs(player.getPlayerCont().position.x - torus.position.x) > 4) {
            player.getPlayerCont().translateOnAxis(directionVect, 5) // 5 - speed
            player.getPlayerCont().position.y = 0
        }
        camera.position.x = player.getPlayerCont().position.x
        camera.position.z = player.getPlayerCont().position.z + 1000
        camera.position.y = player.getPlayerCont().position.y + 1000
        camera.lookAt(player.getPlayerCont().position)

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    render();


});