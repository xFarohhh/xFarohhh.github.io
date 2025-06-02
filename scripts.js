// imports necessary capabilities for 3D
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// imports necessary plugins to read file structure of 3D objects
import{ GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// variables to set camera
const camera = new THREE.PerspectiveCamera(
    10, 
    window.innerWidth/ window.innerHeight,
    0,1,
    1000
);

camera.position.z = 15;// sets the camera further back to see the scene better

const scene = new THREE.Scene();//variable to create the scene
let bee;
// functions to control the 3D object
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer({alpha:true});
loader.load('demon_bee_full_texture.glb',
    function(gltf) {
        bee = gltf.scene;
        scene.add(bee);
    },
    function(xhr){},
    function(error){
        console.log("model not rendered")
    }
);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

const reRender3D = () =>{
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
};
reRender3D();

