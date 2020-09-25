export class Mat4f
{
    #matrix;

    get matrix(){return this.#matrix}
    set matrix(mat){ this.#matrix = mat; }

    constructor([x,y,z])
    {
        this.#matrix = new Float32Array(
            [1,0,0,x,
                     0,1,0,y,
                     0,0,1,z,
                     0,0,0,1,])
    }

    // TODO
    multiplyVec4()
    {

    }


    identity()
    {
        this.#matrix = this.#matrix = new Float32Array(
            [1,0,0,0,
                     0,1,0,0,
                     0,0,1,0,
                     0,0,0,1,]);
    }


    rotateX(rot)
    {
        let matrix = new Mat4f([0,0,0]);
        matrix.identity();
        matrix.matrix()[5] = Math.cos(rot);
        matrix.matrix()[6] = -Math.sin(rot);
        matrix.matrix()[9] = Math.sin(rot);
        matrix.matrix()[10] = Math.cos(rot);
        this.multM4f(matrix);
    }

    rotateY(rot)
    {
        let matrix = new Mat4f([0,0,0]);
        matrix.identity();
        matrix.matrix()[0] = Math.cos(rot);
        matrix.matrix()[2] = Math.sin(rot);
        matrix.matrix()[8] = -Math.sin(rot);
        matrix.matrix()[10] = Math.cos(rot);
        this.multM4f(matrix);
    }


    rotateZ(rot)
    {
        let matrix = new Mat4f([0,0,0]);
        matrix.identity();
        matrix.matrix()[0] = Math.cos(rot);
        matrix.matrix()[1] = -Math.sin(rot);
        matrix.matrix()[4] = Math.sin(rot);
        matrix.matrix()[5] = Math.cos(rot);
        this.multM4f(matrix);
    }


    multM4fSet(mult)
    {
        let matrixB = mult.matrix;
        let multMatrix = new Float32Array(16);
        multMatrix[0] = this.#matrix[0] * matrixB[0] + this.#matrix[1] * matrixB[4] + this.#matrix[2] * matrixB[8] + this.#matrix[3] * matrixB[12];
        multMatrix[1] = this.#matrix[0] * matrixB[1] + this.#matrix[1] * matrixB[5] + this.#matrix[2] * matrixB[9] + this.#matrix[3] * matrixB[13];
        multMatrix[2] = this.#matrix[0] * matrixB[2] + this.#matrix[1] * matrixB[6] + this.#matrix[2] * matrixB[10] + this.#matrix[3] * matrixB[14];
        multMatrix[3] = this.#matrix[0] * matrixB[3] + this.#matrix[1] * matrixB[7] + this.#matrix[2] * matrixB[11] + this.#matrix[3] * matrixB[15];
        multMatrix[4] = this.#matrix[4] * matrixB[0] + this.#matrix[5] * matrixB[4] + this.#matrix[6] * matrixB[8] + this.#matrix[7] * matrixB[12];
        multMatrix[5] = this.#matrix[4] * matrixB[1] + this.#matrix[5] * matrixB[5] + this.#matrix[6] * matrixB[9] + this.#matrix[7] * matrixB[13];
        multMatrix[6] = this.#matrix[4] * matrixB[2] + this.#matrix[5] * matrixB[6] + this.#matrix[6] * matrixB[10] + this.#matrix[7] * matrixB[14];
        multMatrix[7] = this.#matrix[4] * matrixB[3] + this.#matrix[5] * matrixB[7] + this.#matrix[6] * matrixB[11] + this.#matrix[7] * matrixB[15];
        multMatrix[8] = this.#matrix[8] * matrixB[0] + this.#matrix[9] * matrixB[4] + this.#matrix[10] * matrixB[8] + this.#matrix[11] * matrixB[12];
        multMatrix[9] = this.#matrix[8] * matrixB[1] + this.#matrix[9] * matrixB[5] + this.#matrix[10] * matrixB[9] + this.#matrix[11] * matrixB[13];
        multMatrix[10] = this.#matrix[8] * matrixB[2] + this.#matrix[9] * matrixB[6] + this.#matrix[10] * matrixB[10] + this.#matrix[11] * matrixB[14];
        multMatrix[11] = this.#matrix[8] * matrixB[3] + this.#matrix[9] * matrixB[7] + this.#matrix[10] * matrixB[11] + this.#matrix[11] * matrixB[15];
        multMatrix[12] = this.#matrix[12] * matrixB[0] + this.#matrix[13] * matrixB[4] + this.#matrix[14] * matrixB[8] + this.#matrix[15] * matrixB[12];
        multMatrix[13] = this.#matrix[12] * matrixB[1] + this.#matrix[13] * matrixB[5] + this.#matrix[14] * matrixB[9] + this.#matrix[15] * matrixB[13];
        multMatrix[14] = this.#matrix[12] * matrixB[2] + this.#matrix[13] * matrixB[6] + this.#matrix[14] * matrixB[10] + this.#matrix[15] * matrixB[14];
        multMatrix[15] = this.#matrix[12] * matrixB[3] + this.#matrix[13] * matrixB[7] + this.#matrix[14] * matrixB[11] + this.#matrix[15] * matrixB[15];
        this.#matrix = multMatrix;
    }

    multM4f(mult)
    {
        let matrixB = mult.matrix;
        let multMatrix = new Float32Array(16);
        multMatrix[0] = this.#matrix[0] * matrixB[0] + this.#matrix[1] * matrixB[4] + this.#matrix[2] * matrixB[8] + this.#matrix[3] * matrixB[12];
        multMatrix[1] = this.#matrix[0] * matrixB[1] + this.#matrix[1] * matrixB[5] + this.#matrix[2] * matrixB[9] + this.#matrix[3] * matrixB[13];
        multMatrix[2] = this.#matrix[0] * matrixB[2] + this.#matrix[1] * matrixB[6] + this.#matrix[2] * matrixB[10] + this.#matrix[3] * matrixB[14];
        multMatrix[3] = this.#matrix[0] * matrixB[3] + this.#matrix[1] * matrixB[7] + this.#matrix[2] * matrixB[11] + this.#matrix[3] * matrixB[15];
        multMatrix[4] = this.#matrix[4] * matrixB[0] + this.#matrix[5] * matrixB[4] + this.#matrix[6] * matrixB[8] + this.#matrix[7] * matrixB[12];
        multMatrix[5] = this.#matrix[4] * matrixB[1] + this.#matrix[5] * matrixB[5] + this.#matrix[6] * matrixB[9] + this.#matrix[7] * matrixB[13];
        multMatrix[6] = this.#matrix[4] * matrixB[2] + this.#matrix[5] * matrixB[6] + this.#matrix[6] * matrixB[10] + this.#matrix[7] * matrixB[14];
        multMatrix[7] = this.#matrix[4] * matrixB[3] + this.#matrix[5] * matrixB[7] + this.#matrix[6] * matrixB[11] + this.#matrix[7] * matrixB[15];
        multMatrix[8] = this.#matrix[8] * matrixB[0] + this.#matrix[9] * matrixB[4] + this.#matrix[10] * matrixB[8] + this.#matrix[11] * matrixB[12];
        multMatrix[9] = this.#matrix[8] * matrixB[1] + this.#matrix[9] * matrixB[5] + this.#matrix[10] * matrixB[9] + this.#matrix[11] * matrixB[13];
        multMatrix[10] = this.#matrix[8] * matrixB[2] + this.#matrix[9] * matrixB[6] + this.#matrix[10] * matrixB[10] + this.#matrix[11] * matrixB[14];
        multMatrix[11] = this.#matrix[8] * matrixB[3] + this.#matrix[9] * matrixB[7] + this.#matrix[10] * matrixB[11] + this.#matrix[11] * matrixB[15];
        multMatrix[12] = this.#matrix[12] * matrixB[0] + this.#matrix[13] * matrixB[4] + this.#matrix[14] * matrixB[8] + this.#matrix[15] * matrixB[12];
        multMatrix[13] = this.#matrix[12] * matrixB[1] + this.#matrix[13] * matrixB[5] + this.#matrix[14] * matrixB[9] + this.#matrix[15] * matrixB[13];
        multMatrix[14] = this.#matrix[12] * matrixB[2] + this.#matrix[13] * matrixB[6] + this.#matrix[14] * matrixB[10] + this.#matrix[15] * matrixB[14];
        multMatrix[15] = this.#matrix[12] * matrixB[3] + this.#matrix[13] * matrixB[7] + this.#matrix[14] * matrixB[11] + this.#matrix[15] * matrixB[15];
        return multMatrix;
    }


    translate([x,y,z])
    {
        this.#matrix[3] = x;
        this.#matrix[7] = y;
        this.#matrix[11] = z;
    }


    translateAdd([x,y,z])
    {
        this.#matrix[3] = this.#matrix[3] + x;
        this.#matrix[7] = this.#matrix[7] + y;
        this.#matrix[11] = this.#matrix[11] + z;
    }



    scale(sx,sy,sz)
    {
        this.#matrix[0] = sx;
        this.#matrix[5] = sy;
        this.#matrix[10] = sz;
    }




    determinante()
    {
        return this.#matrix[12] * this.#matrix[9] * this.#matrix[6] * this.#matrix[3] - this.#matrix[8] * this.#matrix[13] * this.#matrix[6] * this.#matrix[3]
        - this.#matrix[12] * this.#matrix[5] * this.#matrix[10] * this.#matrix[3] + this.#matrix[4] * this.#matrix[13] * this.#matrix[10] * this.#matrix[3]
        + this.#matrix[8] * this.#matrix[5] * this.#matrix[14] * this.#matrix[3] - this.#matrix[4] * this.#matrix[9] * this.#matrix[14] * this.#matrix[3]
        - this.#matrix[12] * this.#matrix[9] * this.#matrix[2] * this.#matrix[7] + this.#matrix[8] * this.#matrix[13] * this.#matrix[2] * this.#matrix[7]
        + this.#matrix[12] * this.#matrix[1] * this.#matrix[10] * this.#matrix[7] - this.#matrix[0] * this.#matrix[13] * this.#matrix[10] * this.#matrix[7]
        - this.#matrix[8] * this.#matrix[1] * this.#matrix[14] * this.#matrix[7] + this.#matrix[0] * this.#matrix[9] * this.#matrix[14] * this.#matrix[7]
        + this.#matrix[12] * this.#matrix[5] * this.#matrix[2] * this.#matrix[11] - this.#matrix[4] * this.#matrix[13] * this.#matrix[2] * this.#matrix[11]
        - this.#matrix[12] * this.#matrix[1] * this.#matrix[6] * this.#matrix[11] + this.#matrix[0] * this.#matrix[13] * this.#matrix[6] * this.#matrix[11]
        + this.#matrix[4] * this.#matrix[1] * this.#matrix[14] * this.#matrix[11] - this.#matrix[0] * this.#matrix[5] * this.#matrix[14] * this.#matrix[11]
        - this.#matrix[8] * this.#matrix[5] * this.#matrix[2] * this.#matrix[15] + this.#matrix[4] * this.#matrix[9] * this.#matrix[2] * this.#matrix[15]
        + this.#matrix[8] * this.#matrix[1] * this.#matrix[6] * this.#matrix[15] - this.#matrix[0] * this.#matrix[9] * this.#matrix[6] * this.#matrix[15]
        - this.#matrix[4] * this.#matrix[1] * this.#matrix[10] * this.#matrix[15] + this.#matrix[0] * this.#matrix[5] * this.#matrix[10] * this.#matrix[15];
    }

    /*
    inverse()
    {
        let det = this.determinante();
        let inverse = new Float32Array(16);
        if (det==0)
        {
            return;
        }
        else
        {
        inverse[0] = (-matrix[13] * matrix[10] * matrix[7] + matrix[9] * matrix[14] * matrix[7] + matrix[13] * matrix[6] * matrix[11]
            - matrix[5] * matrix[14] * matrix[11] - matrix[9] * matrix[6] * matrix[15] + matrix[5] * matrix[10] * matrix[15]) / det;
        inverse[1] = (matrix[13] * matrix[10] * matrix[3] - matrix[9] * matrix[14] * matrix[3] - matrix[13] * matrix[2] * matrix[11]
            + matrix[1] * matrix[14] * matrix[11] + matrix[9] * matrix[2] * matrix[15] - matrix[1] * matrix[10] * matrix[15]) / det;
        inverse[2] = (-matrix[13] * matrix[6] * matrix[3] + matrix[5] * matrix[14] * matrix[3] + matrix[13] * matrix[2] * matrix[7]
            - matrix[1] * matrix[14] * matrix[7] - matrix[5] * matrix[2] * matrix[15] + matrix[1] * matrix[6] * matrix[15]) / det;
        inverse[3] = (matrix[9] * matrix[6] * matrix[3] - matrix[5] * matrix[10] * matrix[3] - matrix[9] * matrix[2] * matrix[7]
            + matrix[1] * matrix[10] * matrix[7] + matrix[5] * matrix[2] * matrix[11] - matrix[1] * matrix[6] * matrix[11]) / det;
        inverse[4] = (matrix[12] * matrix[10] * matrix[7] - matrix[8] * matrix[14] * matrix[7] - matrix[12] * matrix[6] * matrix[11]
            + matrix[4] * matrix[14] * matrix[11] + matrix[8] * matrix[6] * matrix[15] - matrix[4] * matrix[10] * matrix[15]) / det;
        inverse[5] = (-matrix[12] * matrix[10] * matrix[3] + matrix[8] * matrix[14] * matrix[3] + matrix[12] * matrix[2] * matrix[11]
            - matrix[0] * matrix[14] * matrix[11] - matrix[8] * matrix[2] * matrix[15] + matrix[0] * matrix[10] * matrix[15]) / det;
        inverse[6] = (matrix[12] * matrix[6] * matrix[3] - matrix[4] * matrix[14] * matrix[3] - matrix[12] * matrix[2] * matrix[7]
            + matrix[0] * matrix[14] * matrix[7] + matrix[4] * matrix[2] * matrix[15] - matrix[0] * matrix[6] * matrix[15]) / det;
        inverse[7] = (-matrix[8] * matrix[6] * matrix[3] + matrix[4] * matrix[10] * matrix[3] + matrix[8] * matrix[2] * matrix[7]
            - matrix[0] * matrix[10] * matrix[7] - matrix[4] * matrix[2] * matrix[11] + matrix[0] * matrix[6] * matrix[11]) / det;
        inverse[8] = (-matrix[12] * matrix[9] * matrix[7] + matrix[8] * matrix[13] * matrix[7] + matrix[12] * matrix[5] * matrix[11]
            - matrix[4] * matrix[13] * matrix[11] - matrix[8] * matrix[5] * matrix[15] + matrix[4] * matrix[9] * matrix[15]) / det;
        inverse[9] = (matrix[12] * matrix[9] * matrix[3] - matrix[8] * matrix[13] * matrix[3] - matrix[12] * matrix[1] * matrix[11]
            + matrix[0] * matrix[13] * matrix[11] + matrix[8] * matrix[1] * matrix[15] - matrix[0] * matrix[9] * matrix[15]) / det;
        inverse[10] = (-matrix[12] * matrix[5] * matrix[3] + matrix[4] * matrix[13] * matrix[3] + matrix[12] * matrix[1] * matrix[7]
            - matrix[0] * matrix[13] * matrix[7] - matrix[4] * matrix[1] * matrix[15] + matrix[0] * matrix[5] * matrix[15]) / det;
        inverse[11] = (matrix[8] * matrix[5] * matrix[3] - matrix[4] * matrix[9] * matrix[3] - matrix[8] * matrix[1] * matrix[7]
            + matrix[0] * matrix[9] * matrix[7] + matrix[4] * matrix[1] * matrix[11] - matrix[0] * matrix[5] * matrix[11]) / det;
        inverse[12] = (matrix[12] * matrix[9] * matrix[6] - matrix[8] * matrix[13] * matrix[6] - matrix[12] * matrix[5] * matrix[10]
            + matrix[4] * matrix[13] * matrix[10] + matrix[8] * matrix[5] * matrix[14] - matrix[4] * matrix[9] * matrix[14]) / det;
        inverse[13] = (-matrix[12] * matrix[9] * matrix[2] + matrix[8] * matrix[13] * matrix[2] + matrix[12] * matrix[1] * matrix[10]
            - matrix[0] * matrix[13] * matrix[10] - matrix[8] * matrix[1] * matrix[14] + matrix[0] * matrix[9] * matrix[14]) / det;
        inverse[14] = (matrix[12] * matrix[5] * matrix[2] - matrix[4] * matrix[13] * matrix[2] - matrix[12] * matrix[1] * matrix[6]
            + matrix[0] * matrix[13] * matrix[6] + matrix[4] * matrix[1] * matrix[14] - matrix[0] * matrix[5] * matrix[14]) / det;
        inverse[15] = (-matrix[8] * matrix[5] * matrix[2] + matrix[4] * matrix[9] * matrix[2] + matrix[8] * matrix[1] * matrix[6]
            - matrix[0] * matrix[9] * matrix[6] - matrix[4] * matrix[1] * matrix[10] + matrix[0] * matrix[5] * matrix[10]) / det;
    }
        this.#matrix =  inverse;
    } */


    get matrix() {return this.#matrix};
}