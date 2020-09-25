import {Mat4f} from './Mat4f.js'
import {Vec3f} from "./Vec3f.js";
import {keys} from "./../../main.js"

export class LookAt extends Mat4f
{

    #matrix = null
    #look = new Vec3f([0,0,0]);
    #up = new Vec3f([0,1,0]);
    #pos = new Vec3f([0,0,0]);
    #right = new Vec3f([0,0,0]);

    //horizontal
    #yaw = 0;
    //vertical
    #pitch = 0;

    #mouseOldX = 0;
    #mouseOldY = 0;

    #sensitivity = 20;

    constructor(Posx,Posy,Posz,lookX,lookY,lookZ) {
        super([Posx,Posy,Posz]);

        this.#pos = new Vec3f([Posx,Posy,Posz]);
        this.#matrix = new Float32Array(
            [1,           0,             0,              Posx,
         this.#up.vertices[0], this.#up.vertices[1], this.#up.vertices[2],    Posy,
                     0,           0,             1,              Posz,
                     0,           0,             0,              1,])
    }

    #looking(mouseX,mouseY)
    {
        let offsetX = mouseX - this.#mouseOldX;
        let offsetY = mouseY - this.#mouseOldY;

        this.#mouseOldX = mouseX;
        this.#mouseOldY = mouseY;

        offsetX *= this.#sensitivity;
        offsetY *= this.#sensitivity;

        this.#yaw += offsetX;
        this.#pitch += offsetY;

        if(this.#pitch > 89.0)
            this.#pitch = 89.0;
        if(this.#pitch < -89.0)
            this.#pitch = -89.0;

        this.#look[0] = Math.cos(this.#yaw);
        this.#look[1] = Math.sin(this.#pitch);
        this.#look[2] = Math.cos(this.#yaw);
        this.#right = this.#up.cross( new Vec3f([this.#look[0],0,this.#look[2]]) );
    }

    #move()
    {
        if(keys["w"] === true)
        {
            this.#pos.vertices[2] -= 1;
        }
    }

    update(mouseX,mouseY)
    {

        this.#looking(mouseX,mouseY);
        this.#move();

        this.#matrix[0] = this.#right.vertices[0];
        this.#matrix[1] = this.#right.vertices[1];
        this.#matrix[2] = this.#right.vertices[2];
        this.#matrix[8] = this.#look.vertices[0];
        this.#matrix[9] = this.#look.vertices[0];
        this.#matrix[10] = this.#look.vertices[0];
        this.#matrix[3] = this.#pos.vertices[0];
        this.#matrix[7] = this.#pos.vertices[1];
        this.#matrix[11] = this.#pos.vertices[2];

    }
}