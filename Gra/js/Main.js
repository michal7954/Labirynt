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

    var getLevel = new Level().getLevel();
    scene.add(getLevel);

    function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    render();
});