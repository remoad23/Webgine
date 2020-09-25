import {Camera} from './../Math/Camera.js'
export class Scene
{
    name = null;
    graphicObjects = [];
    camera = new Camera([0,0,-1]);

    constructor() {

    }
}