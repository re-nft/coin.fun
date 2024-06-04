<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  import Coin from '$lib/assets/coinsvg.svg';
  import { cn } from '$lib/utils/ui';

  let className: string | undefined = undefined;
  export { className as class };

  let container: HTMLElement;
  let instance: CoinAnimation | undefined;

  class CoinAnimation {
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    coin: THREE.Mesh;

    constructor(container: HTMLElement) {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(Coin, (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
      });

      const geometry = new THREE.CylinderGeometry(5, 5, 1, 64);
      texture.colorSpace = THREE.SRGBColorSpace;
      const materials = [
        new THREE.MeshBasicMaterial({ color: '#ff8a33' }),
        new THREE.MeshBasicMaterial({ map: texture }),
        new THREE.MeshBasicMaterial({ map: texture })
      ];
      this.coin = new THREE.Mesh(geometry, materials);
      this.scene.add(this.coin);
      this.camera.position.z = 9;

      this.animate();
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      this.coin.rotation.x += 0.01;
      this.coin.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    }

    dispose() {
      if (this.renderer) {
        this.renderer.dispose();
        this.scene.remove(this.coin);
        this.coin.geometry.dispose();
        if (this.renderer.domElement.parentElement) {
          this.renderer.domElement.parentElement.removeChild(
            this.renderer.domElement
          );
        }
      }
    }

    resize() {
      this.renderer.setSize(
        container.clientWidth,
        Math.round((container.clientWidth / 16) * 9)
      );
    }
  }

  onMount(() => {
    instance = new CoinAnimation(container);

    return () => {
      instance?.dispose();
    };
  });
</script>

<svelte:window on:resize={() => instance?.resize()} />
<div class={cn('aspect-video', className)} bind:this={container} />
