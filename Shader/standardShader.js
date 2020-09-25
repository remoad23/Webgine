export const standardShader = {

    vertexShader: `#version 300 es
    layout(location = 0) in vec3 VertexPos;

    uniform mat4 PMV;

    void main() {
      gl_Position =  PMV * vec4(VertexPos,1.0);
    }
    `,
    fragmentShader: `#version 300 es
     precision mediump float;
    // we need to declare an output for the fragment shader
    out vec4 outColor;
     
    void main() {
      // Just set the output to a constant reddish-purple
      outColor = vec4(1, 0, 0.5, 1);
    }
    `,

    get vertex(){ return this.vertexShader},
    get fragment(){ return this.vertexShader},

    set vertex(vertex){ Console.log("Shader cant be changed")},
    set fragment(fragment){ Console.log("Shader cant be changed")},
}