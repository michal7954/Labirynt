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

    function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    render();
});