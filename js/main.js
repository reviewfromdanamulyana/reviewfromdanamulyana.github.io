const scene = new THREE.Scene();
const world = document.querySelector('#world-render')
world.classList.add('d3-asset');

const cam = new THREE.PerspectiveCamera(45, world.clientWidth/world.clientHeight, 1,1000);

cam.position.z += 80;
cam.position.y += 50;

scene.background = new THREE.Color(0x60cc96)

let renderer = new THREE.WebGLRenderer({antialias: true})

renderer.setSize(world.clientWidth,world.clientHeight)
world.appendChild(renderer.domElement)

// let controls = new THREE.OrbitControls(cam, renderer.domElement);

let pLight = new THREE.PointLight(0xffffff,2)
pLight.position.set(10,60,80)
scene.add(pLight)
scene.add(new THREE.PointLightHelper(pLight, 0.1,0xff0000))

let load3d;

let loader = new THREE.GLTFLoader().load('../assets/3dasset/world.glb', function(result){
    load3d = result.scene.children[0]
    load3d.scale.set(29,29,29)
    load3d.position.y = 48
    scene.add(load3d)
})


// window.addEventListener('resize', function(){ // untuk responsive resize
//     renderer.setSize(world.clientWidth,world.clientHeight);
//     cam.aspect = world.clientWidth/world.clientHeight
//     load3d.scale.set(world.clientWidth/45,world.clientWidth/45,world.clientWidth/45)
//     cam.updateProjectionMatrix()
// })

const draw = () => {
    if(load3d){
        load3d.rotation.y += 0.001
        load3d.rotation.z += 0.0008
    }
    renderer.render(scene, cam)
    requestAnimationFrame(draw)
}

draw()