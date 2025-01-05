import {
  SiAframe,
  SiAlpinedotjs,
  SiBabylondotjs,
  SiChartdotjs,
  SiP5Dotjs,
  SiPreact,
  SiThreedotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SlGameController } from "react-icons/sl";
import { BsBootstrap } from "react-icons/bs";
import { PiAngularLogo } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";
import { TbCircles } from "react-icons/tb";
import { Itemplates, template } from "@/interfaces/TemplateInterface";
import { DiJqueryUiLogo } from "react-icons/di";

export const templates: Itemplates = {
  javascript: () => ({
    html: { mode: "html", value: "", external: [] },
    css: { mode: "css", value: "", external: [] },
    javascript: { mode: "javascript", value: "", external: [] },
  }),

  tailwindcss: () => ({
    html: {
      mode: "html",
      value: `
  <div class="bg-red-500 text-white text-2xl p-4">
  Hello World
  </div>
        `,
      external: [],
    },
    css: { mode: "css", value: "", external: [] },
    javascript: {
      mode: "javascript",
      value: "",
      external: [`<script src="https://cdn.tailwindcss.com"></script>`],
    },
  }),

  bootstrap: () => ({
    html: {
      mode: "html",
      value: `
  <div class="container">
    <div class="alert alert-primary" role="alert">
      Hello World in Bootstrap
    </div>
  </div>
        `,
      external: [
        `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />`,
        `<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>`,
        `<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>`,
      ],
    },
    css: { mode: "css", value: "", external: [] },
    javascript: { mode: "javascript", value: "", external: [] },
  }),

  jquery: () => ({
    html: {
      mode: "html",
      value: `
  <div class="container">
    <p>Hello world</p>
    <button id="helloButton">Click Me</button>
  </div>
        `,
      external: [
        `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`,
      ],
    },
    css: { mode: "css", value: "", external: [] },
    javascript: {
      mode: "javascript",
      value: `
  $(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });
        `,
      external: [],
    },
  }),

  vueJS: () => ({
    html: {
      mode: "html",
      value: `<div id="app">
   <h1 class="text-center text-2xl">Hello World in {{ message }}</h1>
</div>
    
<script>
    const app = Vue.createApp({
      data() {
        return {
          message: 'Hello Vue!'
        };
       }
    });
    
  app.mount('#app');
</script>
    
          `,
      external: [`<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>`],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: ``,
      external: [],
    },
  }),

  angular: () => ({
    html: {
      mode: "html",
      value: `
  <body ng-app="myApp">
    <div ng-controller="myController">
      <h1>{{ message }}</h1>
      <input type="text" ng-model="message">
    </div>
  </body>
        `,
      external: [
        `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `
  const app = angular.module('myApp', []);
  app.controller('myController', function($scope) {
    $scope.message = 'Olá, Mundo!';
  });
        `,
      external: [],
    },
  }),

  react: () => ({
    html: {
      mode: "html",
      value: `
  <div id="root"></div>
  <script type="text/babel">
    const App = () => {
      const [count, setCount] = React.useState(0);
  
      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Yokocode</h1>
          <p>Contador: {count}</p>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
      );
    };
  
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
        `,
      external: [
        `<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>`,
        `<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>`,
        `<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.4/babel.min.js" crossorigin></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: "",
      external: [],
    },
  }),
  alpinejs: () => ({
    html: {
      mode: "html",
      value: `
<div x-data="{ count: 0 }">
    <h1 x-text="'Contador: ' + count"></h1>
    <button @click="count++">Incrementar</button>
</div>
            `,
      external: [
        `<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: ``,
      external: [],
    },
  }),
  preact: () => ({
    html: {
      mode: "html",
      value: `<div id="app"></div>
            `,
      external: [
        `<script src="https://unpkg.com/preact@10.15.1/dist/preact.min.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `const { h, render } = preact;

const App = () => h('h1', null, 'hello, Yokocode!');
        
render(h(App), document.getElementById('app'));`,
      external: [],
    },
  }),
  mithril: () => ({
    html: {
      mode: "html",
      value: `<div id="app"></div>

            `,
      external: [
        `<script src="https://unpkg.com/mithril/mithril.min.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `
const App = {
    view: () => m('h1', 'Olá, Mithril!'),
};
            
 m.mount(document.getElementById('app'), App);`,
      external: [],
    },
  }),
  charjs: () => ({
    html: {
      mode: "html",
      value: `
            <canvas id="myChart"></canvas>

            `,
      external: [
        `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                }],
              },
            });`,
      external: [],
    },
  }),
  threejs: () => ({
    html: {
      mode: "html",
      value: ``,
      external: [
        `<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "*{margin:0}",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `  var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
        
            var geometry = new THREE.BoxGeometry();
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
        
            camera.position.z = 5;
        
            var animate = function () {
              requestAnimationFrame(animate);
              cube.rotation.x += 0.01;
              cube.rotation.y += 0.01;
              renderer.render(scene, camera);
            };
        
            animate();`,
      external: [],
    },
  }),
  babylonjs: () => ({
    html: {
      mode: "html",
      value: `<canvas id="renderCanvas" style="width:100%; height:100%"></canvas>`,
      external: [
        `<script src="https://cdn.babylonjs.com/babylon.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: `*{
 margin: 0;
 }
            
 body{
  overflow: hidden;
}`,
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `var canvas = document.getElementById("renderCanvas");
            var engine = new BABYLON.Engine(canvas, true);
            var scene = new BABYLON.Scene(engine);
        
            var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
        
            var light = new BABYLON.HemisphericLight("light1", BABYLON.Vector3.Up(), scene);
            var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
        
            engine.runRenderLoop(function () {
              scene.render();
            });`,
      external: [],
    },
  }),
  p5js: () => ({
    html: {
      mode: "html",
      value: `
  <div id="sketch-holder"></div>
        `,
      external: [
        `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `
  function setup() {
    createCanvas(innerWidth, innerHeight);
  }
  function draw() {
    background(220);
    ellipse(200, 200, 100, 100);
  }
        `,
      external: [],
    },
  }),

  phaser: () => ({
    html: {
      mode: "html",
      value: `
  <div id="game-container"></div>
        `,
      external: [
        `<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.60.0/phaser.min.js"></script>`,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: `
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  const game = new Phaser.Game(config);
  function preload() {
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
  }
  function create() {
    this.add.image(400, 300, 'sky');
  }
  function update() {
    // Game logic goes here
  }
        `,
      external: [],
    },
  }),
  aframe: () => ({
    html: {
      mode: "html",
      value: `
        <a-scene>
        <a-box position="0 1.5 -5" rotation="0 45 45" color="#4CC3D9"></a-box>
        <a-sphere position="2 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder position="-2 1 -5" radius="0.5" height="2" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -5" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>`,
      external: [
        `<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
          `,
      ],
    },
    css: {
      mode: "css",
      value: "",
      external: [],
    },
    javascript: {
      mode: "javascript",
      value: ``,
      external: [],
    },
  }),
};

export const templatesTitle: template[] = [
  {
    stack: "javascript",
    svg: IoLogoJavascript,
  },
  {
    stack: "tailwindcss",
    svg: SiTailwindcss,
  },
  {
    stack: "bootstrap",
    svg: BsBootstrap,
  },
  {
    stack: "jquery",
    svg: DiJqueryUiLogo,
  },
  {
    stack: "react",
    svg: FaReact,
  },
  {
    stack: "angular",
    svg: PiAngularLogo,
  },
  {
    stack: "vueJS",
    svg: FaVuejs,
  },
  {
    stack: "alpinejs",
    svg: SiAlpinedotjs,
  },
  {
    stack: "preact",
    svg: SiPreact,
  },
  {
    stack: "mithril",
    svg: TbCircles,
  },
  {
    stack: "p5js",
    svg: SiP5Dotjs,
  },
  {
    stack: "charjs",
    svg: SiChartdotjs,
  },
  {
    stack: "threejs",
    svg: SiThreedotjs,
  },
  {
    stack: "babylonjs",
    svg: SiBabylondotjs,
  },
  {
    stack: "phaser",
    svg: SlGameController,
  },
  {
    stack: "aframe",
    svg: SiAframe,
  },
];
