import {Mat4f} from './Mat4f.js'
import {LookAt} from "./lookAt.js";
export class Camera
{
    #matrices = {
        View: new LookAt(0,0,2,0,0,-2),
        Project: new Mat4f([0,0,0]),
    }

    #projection = {
        zNear: 0.1,
        zFar: 1000,
        aspectRatio: 1920/1080,
        fov: 65,
        angle: null,
        q: null,
    }

    constructor([x,y,z]) {
        this.#projection.angle =  (this.#projection.fov/2) * (Math.PI/180);
        this.#projection.q = (1 / (Math.tan(this.#projection.angle) ) );

        this.#matrices.View.translate([x,y,z]);

        this.#matrices.Project.matrix[0] = this.#projection.q / this.#projection.aspectRatio ;
        this.#matrices.Project.matrix[5] = this.#projection.q;
        this.#matrices.Project.matrix[10] = (this.#projection.zNear + this.#projection.zFar) / (this.#projection.zNear - this.#projection.zFar);
        this.#matrices.Project.matrix[11] =  (2*this.#projection.zNear * this.#projection.zFar) / (this.#projection.zNear - this.#projection.zFar) ;
        this.#matrices.Project.matrix[14] = -1;
        this.#matrices.Project.matrix[15] = 0;


    }


    get Project(){return this.#matrices.Project};
    get View(){return this.#matrices.View};

}