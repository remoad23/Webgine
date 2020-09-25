import {Vec3f} from './scripts/Math/Vec3f.js';
import * as Shader from './scripts/Shader.js';
import { standardShader } from './Shader/standardShader.js';
import {MainScene} from "./scripts/Scenes/MainScene.js";
import {GOBJ as obj} from "./scripts/GOBJ.js";
import * as debug from './Debug/Debugger.js'

const canvas = document.querySelector("#glCanvas");
let gl = canvas.getContext("webgl2");
let currentScene = null;
let scenes = [];
export let mouseX = 0;
export let mouseY = 0;
export let keys = {w: false, s: false, d: false, a: false};

function logKey(e)
{
    console.log(e.code);
    if(e.code === "KeyW")
        keys.w = true;
    else
        keys.w = false;
    if(e.code === "KeyS")
        keys.s = true;
    else
        keys.s = false;
    if(e.code === "KeyA")
        keys.a = true;
    else
        keys.a = false;
    if(e.code === "KeyD")
        keys.d = true;
    else
        keys.d = false;
}

function init()
{
    gl = WebGLDebugUtils.makeDebugContext(gl, debug.throwOnGLError, debug.logAndValidate);
    scenes.push(new MainScene("MainScene",gl));
    currentScene = scenes[0];
    (gl) && requestAnimationFrame(main);
    canvas.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        console.log(mouseX);
        console.log(mouseY);
    }, false);
    document.addEventListener('keypress', logKey);
}

// runtime function
function main()
{
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
    gl.viewport(0, 0, 1920, 1080);

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    //executes the current Scene
    let scene = currentScene.runScene(gl);
    if(!scene["keepRunning"])
    {
        currentScene = scenes[scene["nextScene"]];
    }

    requestAnimationFrame(main);
}


window.onload = init();