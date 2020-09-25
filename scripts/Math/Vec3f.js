export class Vec3f
{
    #vertices;

    get vertices(){return this.#vertices}
    set vertices([x,y,z]){ this.#vertices[0,1,2] = [x,y,z]; }

    constructor([x,y,z])
    {
        this.#vertices = new Float32Array([x,y,z])
    }


    add(vec3)
    {
        this.#vertices[0] += vec3.vertices[0];
        this.#vertices[1] += vec3.vertices[1];
        this.#vertices[2] += vec3.vertices[2];

    }

    subtract(vec3)
    {
        this.#vertices[0] -= vec3[0];
        this.#vertices[1] -= vec3[1];
        this.#vertices[2] -= vec3[2];
    }

    multiply(vec3)
    {
        this.#vertices[0] *= vec3[0];
        this.#vertices[1] *= vec3[1];
        this.#vertices[2] *= vec3[2];
    }

    normalize()
    {
        let abs = 1/this.absolute();
        return new Vec3f([abs * this.#vertices[0],abs * this.#vertices[1],abs * this.#vertices[2]]);
    }


    cross(vec3)
    {
        let cross_P = new Vec3f([0,0,0]);
        cross_P[0] = this.#vertices[1] * vec3.vertices[2] - this.#vertices[2] * vec3.vertices[1];
        cross_P[1] = this.#vertices[2] * vec3.vertices[0] - this.#vertices[0] * vec3.vertices[2];
        cross_P[2] = this.#vertices[0] * vec3.vertices[1] - this.#vertices[1] * vec3.vertices[0];
        return cross_P;
    }



    absolute()
    {
        return Math.sqrt(Math.pow(this.#vertices[0],2) + Math.pow(this.#vertices[1],2) + Math.pow(this.#vertices[2],2))
    }

    toString()
    {
        return `x: ${this.#vertices[0] } y: ${this.#vertices[1] } z: ${this.#vertices[2] }`
    }

}