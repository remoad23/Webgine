import {Mat4f} from "./Math/Mat4f.js";

export class GOBJ
{
    vao = null
    vbo = {
        vertex:  [
            0.3, 0,
            0.4, 0.0,
            0.7, 0.0,],
    }

    #matrices = {
        ModelMat: null,
        MVP: new Mat4f([0,0,0]),
    }



    /**
     * Can have following properties:
     * {{vertex: null, texel: null, normals: null}}
     */
    #vertex = {}

    programInfo = {
        program: null,
        attribLocations: {},
        uniformLocations: {},
    };

    constructor([x,y,z],[vertexBool,texelBool,normalBool,indexingBool],program,gl) {
        if(vertexBool)
            this.#vertex.vertex = null;
        if(texelBool)
            this.#vertex.texel = null;
        if(normalBool)
            this.#vertex.normals = null;
        if(indexingBool)
            this.#vertex.indexing = null;

        this.#matrices.ModelMat = new Mat4f([x,y,z]);
        this.#initProgramInfo(gl,program)

        this.generateVBO(gl,"vertex","VertexPos");
        this.initUniforms(gl,"PMV");
        this.generateVAO(gl,"vertex");
    }

    addVertex()
    {

    }

    /**
     *
     * @param gl  the GL Canvas
     * @param cam Camera Object of current Scene
     * @param extraFunc anonymous function to allow child classes to use their additional functionality
     */
    draw(gl,cam,extraFunc)
    {
        gl.useProgram(this.programInfo.program);
        gl.bindVertexArray(this.vao)
        this.updateMVP(cam.View,cam.Project)
        this.generateUniforms4fv(gl)

        if(extraFunc !== undefined) extraFunc();
        const offset = 0;
        const vertexCount = 3;
        gl.drawArrays(gl.TRIANGLES, offset, vertexCount);
        gl.bindVertexArray(null);
    }

    #initProgramInfo(gl,program)
    {
        this.programInfo.program = program;
    }

    initUniforms(gl,propertyName)
    {
        this.programInfo.uniformLocations[propertyName] = {
            id: gl.getUniformLocation(this.programInfo.program, propertyName),
            name: propertyName,
        };
    }

    updateMVP(view,project)
    {
   //     this.#matrices.MVP.matrix = this.#matrices.ModelMat.multM4f(view);
    //    this.#matrices.MVP.multM4fSet(project);

        this.#matrices.MVP.matrix = project.multM4f(view);
        this.#matrices.MVP.multM4fSet(this.#matrices.ModelMat);
    }

    generateVBO(gl,vboname,attributeName)
    {
        //Reference Attribute in Shader
        this.programInfo.attribLocations[vboname] = gl.getAttribLocation(this.programInfo.program, attributeName);
        //create VBO
        this.vbo[vboname] = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,this.vbo[vboname]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-0.7, 0.0, 0.0,
                                                                  0.3, 0.0, 0.0,
                                                                  0.0, 0.5, 0.0]), gl.STATIC_DRAW);
    }

    generateVAO(gl,attributeName,size, type, normalize, stride, offset)
    {
        this.vao = gl.createVertexArray();
        gl.bindVertexArray(this.vao);
        gl.enableVertexAttribArray(this.programInfo.attribLocations[attributeName]);
        gl.vertexAttribPointer(this.programInfo.attribLocations[attributeName],3, gl.FLOAT, false, 0, 0)
        gl.bindVertexArray(null)
    }

    generateUniforms4fv(gl)
    {
        for(let uniform in this.programInfo.uniformLocations)
        {
            gl.uniformMatrix4fv(this.programInfo.uniformLocations["PMV"].id, true, this.#matrices.MVP.matrix);
         //   gl.uniformMatrix4fv(uniform.id, true, this.#matrices.MVP.matrix);
        }
    }


}