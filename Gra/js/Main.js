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

    /*
    var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
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

    var radius = new Settings().GetSettings().radius
    var getLevel = new Level().getLevel();
    var start = {
        x: new LevelData().getLevelData().level[0].x * radius * 344 / 200,
        y: - (new LevelData().getLevelData().level[0].y * 400 * radius / 200),
    }
    getLevel.position.set(
        -start.x,
        85 * radius / 200,
        -start.y
    )
    scene.add(getLevel);

    var geometry = new THREE.TorusBufferGeometry(20, 10, 3, 17);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var torus = new THREE.Mesh(geometry, material);
    torus.rotateX(Math.PI / 2)
    torus.position.y = 30
    scene.add(torus);

    var player = new Player()
    var cont = player.getPlayerCont();
    scene.add(cont)

    ally_class = new Ally()
    var ally;
    ally_class.loadModel("libs/TRIS.js", function (data) {
        ally = data
        scene.add(ally)
        ally.children[0].rotation.y = -Math.PI / 2;
        ally.position.set(400, 0, 200)
    })


    var clickedVect = new THREE.Vector3(0, 0, 0); // wektor określający punkt kliknięcia
    var directionVect = new THREE.Vector3(0, 0, 0); // wektor określający kierunek ruchu playera
    var directionVect2 = new THREE.Vector3(0, 0, 0);


    var mouseclick;
    var moj_event;
    var clicked = false;
    $(document).mousedown(function (event) {
        moj_event = event;
        mouseclick = true;
        if (mauseover) {
            ally.children[1].material.color.r = 0;
            ally.children[1].material.color.g = 0;
            ally.children[1].material.color.b = 1;
            clicked = true;
        }
    })

    $(document).mouseup(function () {
        mouseclick = false;
    })

    $(document).mousemove(function (event) {
        moj_event = event;
        moj_raycaster(moj_event)
        hover(moj_event)

    })

    function moj_raycaster(e) {
        if (mouseclick) {
            mouseVector.x = (e.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(e.clientY / $(window).height()) * 2 + 1;

            raycaster.setFromCamera(mouseVector, camera);
            var intersects = raycaster.intersectObjects(scene.children);

            if (intersects.length > 0) {
                clickedVect = intersects[0].point
                directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize()

                torus.position.set(clickedVect.x, 0, clickedVect.z)

                var angle = Math.atan2(
                    player.getPlayerCont().position.clone().x - clickedVect.x,
                    player.getPlayerCont().position.clone().z - clickedVect.z
                )

                player.getPlayerMesh().rotation.y = angle
                player.model.setAnimation();
            }
        }
    }

    var mouseover = false;
    function hover(e) {
        mouseVector.x = (e.clientX / $(window).width()) * 2 - 1;
        mouseVector.y = -(e.clientY / $(window).height()) * 2 + 1;

        raycaster.setFromCamera(mouseVector, camera);
        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            hoverVect = intersects[0].point

            if (Math.abs(hoverVect.x - ally.position.x) < 40 && Math.abs(hoverVect.z - ally.position.z) < 40) {
                ally.children[1].visible = true;
                mauseover = true;
            }
            else {
                ally.children[1].visible = false;
                mauseover = false;
            }
        }
    }

    function render() {

        moj_raycaster(moj_event)

        if (Math.abs(player.getPlayerCont().position.x - torus.position.x) > 3 || Math.abs(player.getPlayerCont().position.z - torus.position.z) > 3) {
            player.getPlayerCont().translateOnAxis(directionVect, 5) // 5 - speed
            player.getPlayerCont().position.y = 0
        }
        else {
            player.model.resetAnimation();
        }
        player.model.updateModel();

        if (ally)
            ally.children[1].rotateZ(Math.PI / 120);

        if (clicked) {
            directionVect2 = player.getPlayerCont().position.clone().sub(ally.position).normalize()

            var angle2 = Math.atan2(
                ally.position.clone().x - player.getPlayerCont().position.x,
                ally.position.clone().z - player.getPlayerCont().position.z
            )


            if (Math.abs(player.getPlayerCont().position.x - ally.position.x) > 80 || Math.abs(player.getPlayerCont().position.z - ally.position.z) > 80) {
                ally.translateOnAxis(directionVect2, 4.5) // 5 - speed
                ally.position.y = 0
                ally_class.setAnimation()
            }
            else {
                ally_class.resetAnimation();
            }
            ally.children[0].rotation.y = angle2 - Math.PI / 2
            ally_class.updateModel();
        }

        //*
        camera.position.x = player.getPlayerCont().position.x + 200
        camera.position.z = player.getPlayerCont().position.z + 300
        camera.position.y = player.getPlayerCont().position.y + 600
        camera.lookAt(player.getPlayerCont().position)
        //*/
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    render();


});