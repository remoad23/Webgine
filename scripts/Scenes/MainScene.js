import {Scene} from './Scene.js'
import {GOBJ} from "../GOBJ.js";
import { standardShader } from './../../Shader/standardShader.js';
import * as shader from './../Shader.js';
import {mouseX} from './../../main.js'
import {mouseY} from './../../main.js'

export class MainScene extends Scene
{
    #settings = {
        running: true,
    }
    a = 0.001;

    constructor(sceneName,gl) {
        super();
         this.name = sceneName;
         this.graphicObjects.push(new GOBJ(
             [0,0,0],
             [true,false,false,false],
             shader.initShaderProgram(gl,standardShader.vertexShader,standardShader.fragmentShader)
             ,gl));
    }

    runScene(gl)
    {
        if(!this.#settings.running)
            return {keepRunning: false, nextScene: "hierSzeneName"};
        for(let obj of this.graphicObjects)
        {
            obj.draw(gl,this.camera);
          //  this.camera.View.translateAdd([0,0,-this.a]);
        }
        this.camera.View.update(mouseX,mouseY);
        return {keepRunning: true}
    }

    initScene()
    {
        this.#settings.running = true;
    }

}