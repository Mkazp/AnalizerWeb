import React, { useEffect } from 'react';
import * as THREE from 'three';
import { ExtrudeGeometry } from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const svgLoader = new SVGLoader();

    const svgPaths = Array.from({ length: 13 }, (_, index) => `/mapsvg/${index + 1}.svg`);
    const cubes = [];

    const loadSvgTexture = async (path) => {
      return new Promise((resolve, reject) => {
        svgLoader.load(
          path,
          (data) => resolve(data),
          undefined,
          (error) => reject(error)
        );
      });
    };

    const createMaterial = async (path) => {
      try {
        const svgData = await loadSvgTexture(path);
    
        const shapes = svgData.paths.flatMap((path) => path.toShapes(true));
        const geometry = new ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false });
    
        // Загрузим текстуру напрямую из изображения SVG
        const texture = new THREE.TextureLoader().load(path);
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff, map: texture });
    
        const mesh = new THREE.Mesh(geometry, material);
    
        return mesh;
      } catch (error) {
        console.error('Error loading SVG texture:', error);
        return null;
      }
    };
    

    const createCubes = async () => {
      const materials = await Promise.all(svgPaths.map(createMaterial).filter((material) => material !== null));
      const geometry = new THREE.BoxGeometry(1, 1, 1);
    
      cubes.push(
        ...materials.map((material, index) => {
          if (material && material.material) {
            const cube = new THREE.Mesh(geometry, material.material);
            cube.position.x = (index - 6) * 1.5;
            scene.add(cube);
    
            cube.userData = { originalColor: material.material.color.clone() };
    
            cube.addEventListener('mouseover', () => {
              material.material.color.set(0xff0000);
            });
    
            cube.addEventListener('mouseout', () => {
              material.material.color.copy(cube.userData.originalColor);
            });
    
            return cube;
          } else {
            return null;
          }
        }).filter(cube => cube !== null)
      );
    };
    
    

    createCubes();

    const animate = () => {
      requestAnimationFrame(animate);

      // cubes.forEach((cube) => {
      //   cube.rotation.x += 0.01;
      //   cube.rotation.y += 0.01;
      // });

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Home;
