// Import necessary Three.js modules
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Set up page title
document.title = "A Desktop with Accessories";

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

// Create a camera with perspective projection
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 6);

// Create a renderer with better settings
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;

renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Load screen textures
const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load('texture/screen1.png');
const texture2 = textureLoader.load('texture/screen2.png');
const texture3 = textureLoader.load('texture/screen3.png');
let currentTexture = texture1;

// Custom shader for screen material
const screenVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const screenFragmentShader = `
  uniform sampler2D screenTexture;
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Add a subtle CRT-like effect
    vec4 texColor = texture2D(screenTexture, uv);
    
    // Add slight scanlines
    float scanLine = sin(uv.y * 300.0) * 0.02;
    texColor.rgb += scanLine;
    
    // Add slight vignette
    float vignette = length(vec2(0.5, 0.5) - uv) * 0.5;
    texColor.rgb -= vignette * 0.5;
    
    gl_FragColor = texColor;
  }
`;

// Create custom shader material for the screen
const screenCustomMaterial = new THREE.ShaderMaterial({
  uniforms: {
    screenTexture: { value: currentTexture },
    time: { value: 0.0 }
  },
  vertexShader: screenVertexShader,
  fragmentShader: screenFragmentShader,
  transparent: true
});
//..................................................................................

//Create table top
// Create table legs with the specified color
const legColor = new THREE.Color(0x393023); // Hex color for the table legs

// Create table legs
const legGeometry = new THREE.BoxGeometry(0.3, 2, 0.2);
const legMaterial = new THREE.MeshBasicMaterial({ color: legColor }); // Apply the color directly

const leg1 = new THREE.Mesh(legGeometry, legMaterial);
leg1.position.set(-3.5, 0.52, -0.8);

const leg2 = leg1.clone();
leg2.position.set(3.5, 0.52, -0.8);
scene.add(leg2);

const leg3 = leg1.clone();
leg3.position.set(-3.5, 0.52, 0.8);
scene.add(leg3);

const leg4 = leg1.clone();
leg4.position.set(3.5, 0.52, 0.8);
scene.add(leg4);

const group = new THREE.Group();
group.add(leg1, leg2, leg3, leg4);

scene.add(group);


//.........................................................................................................
// GLTF Loader
const loader = new GLTFLoader();
let CPUz = null;
let screenMesh = null;
let monitorPosition = new THREE.Vector3(); // To store monitor position for rotating light

// Load the room
let Roomz = null;
loader.load('roomz/scene.gltf', function(gltf) {
  Roomz = gltf.scene;
  const scale = 1;
  Roomz.scale.set(scale, scale, scale);
  Roomz.position.set(0, 0, 0);
  
  // Add custom textures to room objects
  Roomz.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // Apply custom PBR materials to make the room look better
      if (child.material) {
        // If we had specific textures for different parts, we could apply them here
        child.material.metalness = 0.2;
        child.material.roughness = 0.8;
      }
    }
  });
  
  scene.add(Roomz);
}, undefined, function(error) {
  console.error("Error loading room model:", error);
});



// Load the tree1
let treez = null;
loader.load('treez/scene.gltf', function(gltf) {
  treez = gltf.scene;
  const scale = 0.2;
  treez.scale.set(scale, scale, scale);
  treez.position.set(-9, 0, -4.0);
  
  // Add custom textures to room objects
  treez.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // Apply custom PBR materials to make the room look better
      if (child.material) {
        // If we had specific textures for different parts, we could apply them here
        child.material.metalness = 0.2;
        child.material.roughness = 0.8;
      }
    }
  });
  
  scene.add(treez);
}, undefined, function(error) {
  console.error("Error loading room model:", error);
});


// Load the tree2
let treez2 = null;
loader.load('treez/scene.gltf', function(gltf) {
  treez2 = gltf.scene;
  const scale = 0.2;
  treez2.scale.set(scale, scale, scale);
  treez2.position.set(8.5, 0, -4.0);
  
  // Add custom textures to room objects
  treez2.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // Apply custom PBR materials to make the room look better
      if (child.material) {
        // If we had specific textures for different parts, we could apply them here
        child.material.metalness = 0.2;
        child.material.roughness = 0.8;
      }
    }
  });
  
  scene.add(treez2);
}, undefined, function(error) {
  console.error("Error loading room model:", error);
});




// Load the Sofa
let sofaz = null;
loader.load('sofaz/scene.gltf', function(gltf) {
    sofaz = gltf.scene;
  const scale = 0.8;
  sofaz.scale.set(scale, scale, scale);
  sofaz.position.set(-7.5, 0, 1);
  
  // Add custom textures to room objects
  sofaz.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // Apply custom PBR materials to make the room look better
      if (child.material) {
        // If we had specific textures for different parts, we could apply them here
        child.material.metalness = 0.2;
        child.material.roughness = 0.8;
      }
    }
  });
  
  scene.add(sofaz);
}, undefined, function(error) {
  console.error("Error loading room model:", error);
});


// Load the chair
let chairz = null;
loader.load('chairz/scene.gltf', function(gltf) {
    chairz = gltf.scene;
  const scale = 2.2;
  chairz.scale.set(scale, scale, scale);
  chairz.position.set(2.3, 1.3, 2);
  chairz.rotation.y = (-Math.PI/2) + 7;
  
  // Add custom textures to room objects
  chairz.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // Apply custom PBR materials to make the room look better
      if (child.material) {
        // If we had specific textures for different parts, we could apply them here
        child.material.metalness = 0.2;
        child.material.roughness = 0.8;
      }
    }
  });
  
  scene.add(chairz);
}, undefined, function(error) {
  console.error("Error loading room model:", error);
});




// Load the desktop computer
loader.load('desktopz/scene.gltf', function(gltf) {
  CPUz = gltf.scene;
  const scale = 0.5;
  CPUz.scale.set(scale, scale, scale);
  CPUz.position.set(0.8, 1.5, -0.5);
  CPUz.rotation.y = -Math.PI / 2; // Rotate to face front
  
  // Add custom textures and materials to CPU parts
  CPUz.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // Apply shader material to screen
      if (child.name === "MY_SCREEN_MY_SCREEN_0") {
        screenMesh = child;
        screenMesh.material = screenCustomMaterial;
        
        // Store monitor position for the rotating light
        screenMesh.getWorldPosition(monitorPosition);
      } 
      // Apply custom materials to other parts
      else if (child.material) {
        // Enhance CPU materials
        child.material.metalness = 0.7;
        child.material.roughness = 0.3;
      }
    }
  });
  
  scene.add(CPUz);
}, undefined, function(error) {
  console.error("Error loading CPU model:", error);
});

// LIGHTING SETUP
// Base ambient light so everything is visible
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// Main directional light
const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
mainLight.position.set(5, 10, 5);
mainLight.castShadow = true;
mainLight.shadow.mapSize.width = 1024;
mainLight.shadow.mapSize.height = 1024;
mainLight.shadow.camera.near = 0.5;
mainLight.shadow.camera.far = 50;
scene.add(mainLight);

// Rotating spotlight around monitor
const rotatingLight = new THREE.SpotLight(
    
    0xffaa00, 20, 10, Math.PI / 2, 0.2, 1

    //0xffffff, // Pure white light
   // 15,       // High intensity
    //15,       // Good range
   // Math.PI / 6, // Narrower angle for a more focused beam
    //0.2,      // Higher focus
   // 1         // Sharp edge

);
rotatingLight.position.set(0, 3, 3);
rotatingLight.castShadow = true;
rotatingLight.shadow.mapSize.width = 1024;
rotatingLight.shadow.mapSize.height = 1024;
scene.add(rotatingLight);

// Add a target for the spotlight
const lightTarget = new THREE.Object3D();
lightTarget.position.set(0, 0, 0);
scene.add(lightTarget);
rotatingLight.target = lightTarget;
scene.background = new THREE.Color(0x050505);

// MOUSE INTERACTION
// Change screen texture on mouse click
window.addEventListener("click", () => {
  if (screenMesh) {
    currentTexture = (currentTexture === texture1) ? texture2 : (currentTexture === texture2) ? texture3 : texture1;
    screenCustomMaterial.uniforms.screenTexture.value = currentTexture;
    console.log("Texture changed");
  }
});

// KEYBOARD INTERACTION
// Set up keyboard controls for camera movement
const keys = {};
document.addEventListener('keydown', (event) => {
  keys[event.key] = true;
});
document.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation variables
let angle = 0;
const clock = new THREE.Clock();

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  const delta = clock.getDelta();
  const time = clock.getElapsedTime();
  
  // Update shader time uniform
  if (screenCustomMaterial) {
    screenCustomMaterial.uniforms.time.value = time;
  }
  
  // Rotate the spotlight around the monitor
  if (monitorPosition.x !== 0 || monitorPosition.z !== 0) {
    angle += delta * 0.5; // Adjust speed here
    const radius = 3;
    rotatingLight.position.x = monitorPosition.x + Math.cos(angle) * radius;
    rotatingLight.position.z = monitorPosition.z + Math.sin(angle) * radius;
    rotatingLight.position.y = monitorPosition.y + 1.5;
    
    // Make the light always point at the monitor
    lightTarget.position.copy(monitorPosition);
  }
  
  // Handle keyboard camera movement
  const moveSpeed = 0.1;
  const rotateSpeed = 0.02;
  
  // WASD movement
  if (keys['w']) {
    camera.position.z -= moveSpeed;
  }
  if (keys['s']) {
    camera.position.z += moveSpeed;
  }
  if (keys['a']) {
    camera.position.x -= moveSpeed;
  }
  if (keys['d']) {
    camera.position.x += moveSpeed;
  }
  
  // QE for up/down
  if (keys['q']) {
    camera.position.y += moveSpeed;
  }
  if (keys['e']) {
    camera.position.y -= moveSpeed;
  }
  
  // Arrow keys for rotation
  if (keys['ArrowLeft']) {
    camera.rotation.y += rotateSpeed;
  }
  if (keys['ArrowRight']) {
    camera.rotation.y -= rotateSpeed;
  }
  if (keys['ArrowUp']) {
    camera.rotation.x += rotateSpeed;
  }
  if (keys['ArrowDown']) {
    camera.rotation.x -= rotateSpeed;
  }
  
  // Look at center (more or less)
  if (keys[' ']) {
    camera.lookAt(new THREE.Vector3(0, 1, 0));
  }
  
  renderer.render(scene, camera);
}

animate();