import React, { useEffect } from 'react'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,

  BoxGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'

const Cube = () => {

  const scene = new Scene()
  const camera = new PerspectiveCamera()
  const renderer = new WebGLRenderer()
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new PlaneGeometry();
  const material1 = new MeshBasicMaterial( { color: 0x00ff00 } );
  const material2 = new MeshBasicMaterial( { color: 0x00fff0 } );
  const plane1 = new Mesh( geometry, material1 );
  const plane2 = new Mesh( geometry, material2 );
  plane1.rotation.x += 1
  plane1.rotation.y += 1
  plane1.position.y += 2
  scene.add( plane1,plane2 );

  camera.position.z = 5;

  // const animate = () => {
  //   requestAnimationFrame( animate );

  //   plane.rotation.x += 0.01;
  //   plane.rotation.y += 0.01;

  //   renderer.render( scene, camera );
  // };

  useEffect(() => {
    console.log('effect 1')
    renderer.render( scene, camera );
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default Cube