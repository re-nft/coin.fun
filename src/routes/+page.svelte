<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { Progress } from '$lib/components/ui/progress/index.js';
  import * as THREE from 'three';
  import Coin from '$lib/assets/coinsvg.svg';

  let progressValue = 0;
  let container: HTMLElement;

  class CoinAnimation {
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    coin: THREE.Mesh;

    constructor(container: HTMLElement) {
      // if (!container) {
      //   console.error('Container element is not defined');
      //   return;
      // }

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
      this.camera.position.z = 15;

      this.animate();
    }

    animate = () => {
      requestAnimationFrame(this.animate);
      this.coin.rotation.x += 0.01;
      this.coin.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };

    dispose = () => {
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
    };
  }

  let coinAnimation: CoinAnimation;

  onMount(() => {
    const timer = setTimeout(() => (progressValue = 30), 500);
    if (browser) {
      coinAnimation = new CoinAnimation(container);
    }
    return () => {
      clearTimeout(timer);
      if (coinAnimation) {
        coinAnimation.dispose();
      }
    };
  });
</script>

<div class="landing-page">
  <br />

  <h1>Coin.fun</h1>
  <h1>Community Owned Memetoken Creator</h1>
  <div bind:this={container} style="width: 100%; height: 300px;" />

  <div class="progress-container">
    <h1>v1.0 Launch Progress</h1>
    <Progress value={progressValue} max={100} />
  </div>

  <div class="milestones">
    <h1>v1.0 Milestones</h1>
    <p>- Pointonomics v1.0 introduced</p>
    <p>- Referral leaderboard</p>
    <p>- Waitlist</p>
    <p>- Twitter authentication</p>
    <p>- Social wallet creation</p>
  </div>

  <br />

  <div class="steps">
    <h1>1/ Earn 100% of the memetoken trading fees</h1>
    <h1>2/ Invite your friends and earn their fees</h1>
    <h1>3/ Complete quests and earn $COIN points</h1>
    <h1>4/ Share on Twitter and earn more $COIN</h1>
  </div>

  <br />

  <div>
    <h1>Philosophy</h1>
    <p>anyone can create a memetoken, including your grandma</p>
    <p>we are ruthless autocrats - community takes 90% of all points</p>
    <p>empower big and small twitter accounts</p>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  .landing-page {
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: black;
    position: relative;
    z-index: 1;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 2em;
    text-transform: uppercase;
    animation: fadeIn 2s ease-in-out;
  }

  .progress-container {
    margin: 20px 0;
  }

  .milestones,
  .steps {
    text-align: left;
    margin: 20px 0;
  }

  .milestones h1,
  .steps h1 {
    font-size: 1.5em;
    margin: 10px 0;
    animation: fadeInUp 1s ease-in-out;
  }

  .milestones p {
    margin: 10px 0;
    animation: fadeInUp 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
