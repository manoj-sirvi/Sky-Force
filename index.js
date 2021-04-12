// import * as THREE from './three.js';
// import * as THREE from "./node_modules/three/build/three.module.js"
// import * as THREE from '../../../build/three.module.js';

let camera, scene, renderer, cube;

function init() {
    // Init scene
    scene = new THREE.Scene();

    // Init camera (PerspectiveCamera)
    // console.log(window.innerHeight, (window.innerWidth))
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // Init renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });

    // Set size (whole window)
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Render to canvas element
    document.body.appendChild(renderer.domElement);

    // Init BoxGeometry object (rectangular cuboid)
    var geometry = new THREE.BoxGeometry(3, 3, 3);

    // Create material with color
    // geometry.colorsNeedUpdate = true
    // for (var i = 0; i < geometry.faces.length; i++) {
    //     geometry.faces[i].color.setHex(Math.random() * 0x0000ff)
    // }
    // red = new THREE.Color(1, 0, 0);
    // green = new THREE.Color(0, 1, 0);
    // blue = new THREE.Color(0, 0, 1);
    // var colors = [red, green, blue];

    // for (var i = 0; i < 3; i++) {
    //     geometry.faces[4 * i].color = colors[i];
    //     geometry.faces[4 * i + 1].color = colors[i];
    //     geometry.faces[4 * i + 2].color = colors[i];
    //     geometry.faces[4 * i + 3].color = colors[i];
    // }
    var cubeMaterial = [
        new THREE.MeshBasicMaterial({ color: 0x0000ff }),
        new THREE.MeshBasicMaterial({ color: 0x800000 }),
        new THREE.MeshBasicMaterial({ color: 0x800000 }),
        new THREE.MeshBasicMaterial({ color: 0x800000 }),
        new THREE.MeshBasicMaterial({ color: 0x800000 }),
        new THREE.MeshBasicMaterial({ color: 0x800000 }),
    ];
    // const material = new THREE.MeshFaceMaterial({
    //     cubeMaterial
    // });

    // Add texture -
    // const texture = new THREE.TextureLoader().load('textures/crate.gif');

    // Create material with texture
    // const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create mesh with geo and material
    cube = new THREE.Mesh(geometry, cubeMaterial);
    // Add to scene
    scene.add(cube);

    // Position camera
    camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube (Change values to change speed)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    // Camera frustum aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    // After making changes to aspect
    camera.updateProjectionMatrix();
    // Reset size
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();