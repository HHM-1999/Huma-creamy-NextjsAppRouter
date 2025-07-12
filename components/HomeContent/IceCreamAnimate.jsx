"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function IceCreamAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0e8d0);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Cone (ice cream cone)
    const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
    const coneMaterial = new THREE.MeshStandardMaterial({ color: 0xd2691e });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.rotation.x = Math.PI;
    scene.add(cone);

    // Scoop (ice cream ball)
    const scoopGeometry = new THREE.SphereGeometry(1, 32, 32);
    const scoopMaterial = new THREE.MeshStandardMaterial({ color: 0xff69b4 });
    const scoop = new THREE.Mesh(scoopGeometry, scoopMaterial);
    scoop.position.y = 1.3;
    scene.add(scoop);

    // Animation loop
    let frameId;
    const animate = () => {
      cone.rotation.y += 0.01;
      scoop.rotation.y += 0.01;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
