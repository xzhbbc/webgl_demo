var canvas = document.getElementById('myCanvas')

var gl = canvas.getContext('webgl')

// console.log(gl)

var program = gl.createProgram()

var vertexShader, framentShader

function  createShader(gl, sourceCode, type) {
    //create shader

    var shader = gl.createShader(type)
    gl.sourceCode(shader, sourceCode)
    gl.compileShader(shader)
    return shader
}

// define vertex shader


//define frament shader

//attch shader to program
gl.attchShader(program, vertexShader)
gl.attchShader(program, framentShader)

// link program to context
gl.linkProgram(program)
gl.useProgram(program)
gl.program = program

