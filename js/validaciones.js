export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.classList.remove("input--invalid");
        input.parentElement.querySelector(".input-error").innerHTML = " ";
    } else {
        input.classList.add("input--invalid");
        input.parentElement.querySelector(".input-error").innerHTML = mostarMensajeDeError(tipoDeInput, input);
    }

}

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    msj: {
        valueMissing: "Por favor, escriba su mensaje",
        patternMismatch: "El mensaje no debe tener más de 120 caracteres"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Por favor, ingrese su contraseña",
        patternMismatch: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial"
    },
    imgURL: {
        valueMissing: "Por favor, elija la imagen de su producto"
    },
    categoria: {
        valueMissing: "Por favor, agregue una categoría para su producto"
    },
    nombreProducto: {
        valueMissing: "Por favor, ingrese un nombre para su producto"
    },
    precio: {
        valueMissing: "Por favor, ingrese el precio al que desea vender su producto",
        patterMismatch: "El precio debe escribirse usando puntos y/o comas."
    },
    descripcion: {
        valueMissing: "Por favor, ingrese una descripción para su producto"
    }
}

const validadores = {

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismatch"
]

function mostarMensajeDeError(tipoDeInput, input) {
    let mensaje = " ";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}