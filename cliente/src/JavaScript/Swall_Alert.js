import Swal from 'sweetalert2'

export const Correcto = () => {
    Swal.fire('Se guardo bien')
    Swal.fire({
        icon: 'success',
        title: 'OK...',
        text: 'se ejecuto correctamente!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
       
    })
}

export const Fallo = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sucedio un error!'
    })
}

export const Eliminar = () => {
    Swal.fire('Se guardo bien')
    Swal.fire({
        icon: 'success',
        title: 'OK...',
        text: 'se elimino correctamente!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
       
    })
}

export const validarDatos = (campo) =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Recuerda que debes llenar los datos de ${campo}`
    })
}