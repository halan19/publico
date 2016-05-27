/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//document.write('<script src = "efectos.js" language = "JavaScript" type = "text/javascript"></script>');

var retornaEntero = false;
var retornaFecha = false;
var retornaEmail = false;
var retornaDecimal = false;
var retornaHMS = false;
var retornaHM = false;
var retornaTxtObl = false;
var retornaEnteroObl = false;
var retornaFechaObl = false;
var retornaEmailObl = false;
var retornaDecimalObl = false;
var retornaHMSObl = false;
var retornaHMObl = false;
var retornaPasswordObl = false;
var errores = [];
var entero = "entero";
var fecha = "fecha";
var email = "email";
var decimal = "decimal";
var hms = "hms"; // Horas Minutos Segundos
var hm = "hm"; // Horas Minutos Segundos

var txtObl = "txtObl";
var enteroObl = "enteroObl";
var fechaObl = "fechaObl";
var emailObl = "emailObl";
var decimalObl = "decimalObl";
var hmsObl = "hmsObl"; // Horas Minutos Segundos
var hmObl = "hmObl"; // Horas Minutos Segundos
var passwordObl = "passwordObl";
var btnValidar = "btnValidar";
var agregar = "agregar";
var modificar = "modificar";
var id = null;
//Particularidades
var retornaValidarUnico = false;
var rutaProyecto = "http://proyecto.com/";

$(document).ready(function () {

    listaSM();
    listaGL();

    $("." + txtObl).focusout(function () {
        mensajeTxtObl($(this));
        visualizarErrores($(this));
    });
    $("." + emailObl).focusout(function ()
    {
        mensajeEmailObl($(this));
        visualizarErrores($(this));
    });
    $("." + email).focusout(function ()
    {
        mensajeEmail($(this));
        visualizarErrores($(this));
    });
    $("." + entero).focusout(function ()
    {
        mensajeEntero($(this));
        visualizarErrores($(this));
    });
    $("." + enteroObl).focusout(function ()
    {
        mensajeEnteroObl($(this));
        visualizarErrores($(this));
    });
    $("." + hms).focusout(function ()
    {
        mensajeHMS($(this));
        visualizarErrores($(this));
    });
    $("." + hmsObl).focusout(function ()
    {
        mensajeHMSObl($(this));
        visualizarErrores($(this));
    });
    $("." + hm).focusout(function ()
    {
        mensajeHM($(this));
        visualizarErrores($(this));
    });
    $("." + hmObl).focusout(function ()
    {
        mensajeHMObl($(this));
        visualizarErrores($(this));
    });
    $("." + fecha).focusout(function ()
    {
        mensajeFecha($(this));
        visualizarErrores($(this));
    });
    $("." + fechaObl).focusout(function ()
    {
        mensajeFechaObl($(this));
        visualizarErrores($(this));
    });
    $("." + decimal).focusout(function ()
    {
        mensajeDecimal($(this));
        visualizarErrores($(this));
    });
    $("." + decimalObl).focusout(function ()
    {
        mensajeDecimalObl($(this));
        visualizarErrores($(this));
    });
    $("." + passwordObl).focusout(function ()
    {
        mensajePasswordObl($(this));
        visualizarErrores($(this));
    });
    $("." + btnValidar).click(function () {

        retornaEntero = false;
        retornaFecha = false;
        retornaEmail = false;
        retornaDecimal = false;
        retornaHMS = false;
        retornaHM = false;
        retornaTxtObl = false;
        retornaEnteroObl = false;
        retornaFechaObl = false;
        retornaEmailObl = false;
        retornaDecimalObl = false;
        retornaHMSObl = false;
        retornaHMObl = false;
        retornaPasswordObl = false;
        retornaValidarUnico = false;

        errores = [];
        var idBoton = $(this).attr("id");
        $("." + idBoton + "." + txtObl).each(function ()//Recorre todos los objetos que tengan como clase campo_obligatorio y si alguno de estos no esta ingresado muestra el mensaje de error y se muebe hacia el Top del mismo
        {
            mensajeTxtObl($(this));
        });
        $("." + idBoton + "." + emailObl).each(function ()
        {
            mensajeEmailObl($(this));
        });
        $("." + idBoton + "." + email).each(function ()
        {
            mensajeEmail($(this));
        });
        $("." + idBoton + "." + entero).each(function ()
        {
            mensajeEntero($(this));
        });
        $("." + idBoton + "." + enteroObl).each(function ()
        {
            mensajeEnteroObl($(this));
        });
        $("." + idBoton + "." + hms).each(function ()
        {
            mensajeHMS($(this));
        });
        $("." + idBoton + "." + hmsObl).each(function ()
        {
            mensajeHMSObl($(this));
        });
        $("." + idBoton + "." + hm).each(function ()
        {
            mensajeHM($(this));
        });
        $("." + idBoton + "." + hmObl).each(function ()
        {
            mensajeHMObl($(this));
        });
        $("." + idBoton + "." + fecha).each(function ()
        {
            mensajeFecha($(this));
        });
        $("." + idBoton + "." + fechaObl).each(function ()
        {
            mensajeFechaObl($(this));
        });
        $("." + idBoton + "." + decimal).each(function ()
        {
            mensajeDecimal($(this));
        });
        $("." + idBoton + "." + decimalObl).each(function ()
        {
            mensajeDecimalObl($(this));
        });
        $("." + idBoton + "." + passwordObl).each(function ()
        {
            mensajePasswordObl($(this));
        });
        visualizarErrores($(this));

        // si se ingreso todo correctamente envia el formulario
        if (retornaEntero === false && retornaFecha === false && retornaEmail === false && retornaDecimal === false && retornaHMS === false && retornaHM === false && retornaTxtObl === false && retornaEnteroObl === false && retornaFechaObl === false && retornaEmailObl === false && retornaDecimalObl === false && retornaHMSObl === false && retornaHMObl === false && retornaPasswordObl === false)
        {

            if (retornaValidarUnico === false)
            {
                ajax(0, $(this));

                //$('#agregarSM').remove();
                // location.reload();
                //$("#" + $(this).attr("name")).submit();
            }

        }


    });
});
function validarEmail(email)
{
    var formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!formato.test(email)) {
        return true;
    } else {
        return false;
    }
}
function validarEntero(entero)
{
    var formato = /^([0-9])*$/;
    if (!formato.test(entero)) {
        return true;
    } else {
        return false;
    }
}
function validarHMS(hms)
{
    var formato = /^(0[0-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!formato.test(hms)) {
        return true;
    } else {
        return false;
    }
}
function validarHM(hm)
{
    var formato = /^(0[0-9]|1\d|2[0-3]):([0-5]\d)$/;
    if (!formato.test(hm)) {
        return true;
    } else {
        return false;
    }
}
function validarDecimal(decimal) //decimal o entero con separador de . o , y con 2 digitos desues de la coma
{
    var formato = /^([0-9])*[,-.]?([0-9]\d)$/;
    if (!formato.test(decimal)) {
        return true;
    } else {
        return false;
    }
}
function validarPassword(password) // (Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales)
{
    var formato = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
    if (!formato.test(password)) {
        return true;
    } else {
        return false;
    }
}
function validarFecha(fecha)
{
    var dia, mes, anio;
    dia = fecha.substr(0, 2);
    mes = fecha.substr(3, 2);
    anio = fecha.substr(6, 4);
    date = new Date(anio, mes - 1, dia);
    var dia_cal = date.getDate().toString();
    var mes_cal = (date.getMonth() + 1).toString();
    if (dia_cal.length !== 2)
        dia_cal = 0 + dia_cal;
    if (mes_cal.length !== 2)
        mes_cal = 0 + mes_cal;
    if (dia_cal + '/' + mes_cal + '/' + date.getFullYear() !== fecha)
        return true;
    else
        return false;
}
function mensajeTxtObl(objeto)
{

    var tipo;

    if (objeto.hasClass(agregar))
    {
        tipo = 0;

    } else if (objeto.hasClass(modificar))
    {
        tipo = 1;
    }

    var contador = 0;

    id = objeto.attr("id");
    if (objeto.val() === "")
    {

        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        eliminarElementosErrores(objeto);
        agregarElemntosErrores(contador, objeto, 1);
        retornaTxtObl = true;
    } else
    {

        if (objeto.hasClass(agregar) || objeto.hasClass(modificar))
        {

            if (objeto.val() !== null)
            {

                ajax(0, objeto);
            }
        } else
        {

            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);
        }

    }
}
function mensajeEmailObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarEmail(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 2);

            retornaEmailObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass(id + "form-group has-success");
            eliminarElementosErrores(objeto);
        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaEmailObl = true;
    }
}
function mensajeEmail(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarEmail(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 2);
            retornaEmail = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-error");
        $("." + id).removeClass("form-group has-success");
        eliminarElementosErrores(objeto);

    }
}
function mensajeEntero(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarEntero(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 3);
            retornaEntero = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-error");
        $("." + id).removeClass("form-group has-success");
        eliminarElementosErrores(objeto);

    }
}
function mensajeEnteroObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    var resultado = validarEntero(objeto.val());
    if (objeto.val() !== "")
    {
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 3);
            retornaEnteroObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);


        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaEnteroObl = true;
    }

}
function mensajeHMS(objeto) {
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarHMS(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 4);
            retornaHMS = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-error");
        $("." + id).removeClass("form-group has-success");
        eliminarElementosErrores(objeto);

    }
}
function mensajeHMSObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    var resultado = validarHMS(objeto.val());
    if (objeto.val() !== "")
    {
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 4);
            retornaHMSObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaHMSObl = true;
    }
}
function mensajeHM(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarHM(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 5);
            retornaHM = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-error");
        $("." + id).removeClass("form-group has-success");
        eliminarElementosErrores(objeto);

    }
}
function mensajeHMObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarHM(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 5);
            retornaHMObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaHMObl = true;
    }
}
function mensajeFecha(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarFecha(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 6);
            retornaFecha = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-error");
        $("." + id).removeClass("form-group has-success");
        eliminarElementosErrores(objeto);

    }
}
function mensajeFechaObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarFecha(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 6);
            retornaFechaObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaFechaObl = true;
    }
}
function mensajeDecimal(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarDecimal(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 7);
            retornaDecimal = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);

        }
    } else
    {
        $("." + id).removeClass("form-group has-error");
        $("." + id).removeClass("form-group has-success");
        eliminarElementosErrores(objeto);

    }
}
function mensajeDecimalObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarDecimal(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 7);
            retornaDecimalObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);
        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaDecimalObl = true;
    }
}
function mensajePasswordObl(objeto)
{
    var contador = 0;
    id = objeto.attr("id");
    if (objeto.val() !== "")
    {
        var resultado = validarPassword(objeto.val());
        if (resultado === true)
        {
            $("." + id).removeClass("form-group has-success");
            $("." + id).addClass("form-group has-error");
            agregarElemntosErrores(contador, objeto, 8);
            retornaPasswordObl = true;
        } else
        {
            $("." + id).removeClass("form-group has-error");
            $("." + id).addClass("form-group has-success");
            eliminarElementosErrores(objeto);
            //  retornaPasswordObl = false;
        }
    } else
    {
        $("." + id).removeClass("form-group has-success");
        $("." + id).addClass("form-group has-error");
        agregarElemntosErrores(contador, objeto, 1);
        retornaPasswordObl = true;
    }
}
function mensaje(objeto, error)
{
    var placeholder = objeto.attr("placeholder");
    switch (error)
    {
        case 1:
            errores.push(placeholder + descripcionMensaje(1, objeto));
            break;
        case 2:
            errores.push(placeholder + descripcionMensaje(2, objeto));
            break;
        case 3:
            errores.push(placeholder + descripcionMensaje(3, objeto));
            break;
        case 4:
            errores.push(placeholder + descripcionMensaje(4, objeto));
            break;
        case 5:
            errores.push(placeholder + descripcionMensaje(5, objeto));
            break;
        case 6:
            errores.push(placeholder + descripcionMensaje(6, objeto));
            break;
        case 7:
            errores.push(placeholder + descripcionMensaje(7, objeto));
            break;
        case 8:
            errores.push(placeholder + descripcionMensaje(8, objeto));
            break;
        case 9:
            errores.push(placeholder + descripcionMensaje(9, objeto));
            break;
    }
}

function descripcionMensaje(id, objeto)
{
    var placeholder = objeto.attr("placeholder");
    switch (id)
    {
        case 1:
            return ": - Campo Obligatorio";
            break;
        case 2:
            return ": - Formato de e-mail incorreto";
            break;
        case 3:
            return ": - El dato ingresado no es un numero";
            break;
        case 4:
            return ": - Formato H-M-S incorreto";
            break;
        case 5:
            return ": - Formato H-M incorreto";
            break;
        case 6:
            return ": - Formato DD/MM/YYYY incorrecto";
            break;
        case 7:
            return ": - El dato ingresado no es un decimal";
            break;
        case 8:
            return ": - Formato de password incorrecto";
            break;
        case 9:
            return ": - Ya se Encuentra Ingresada la " + placeholder;
            break;
    }
}
function eliminarElementosErrores(objeto)
{
    for (var a = 0; a < errores.length; a++)
    {
        if (errores[a].search(objeto.attr("placeholder")) > -1)
        {
            errores.splice(a, 1);
        }
    }
}
function agregarElemntosErrores(contador, objeto, mensajeError)
{

    if (errores.length > 0)
    {

        for (var a = 0; a < errores.length; a++)
        {
            if (errores[a].search(objeto.attr("placeholder")) > -1 && errores[a] === (objeto.attr("placeholder") + descripcionMensaje(mensajeError)))
            {

                contador++;
            }
            if (errores[a].search(objeto.attr("placeholder")) > -1 && errores[a] !== (objeto.attr("placeholder") + descripcionMensaje(mensajeError)))
            {
                eliminarElementosErrores(objeto);
            }
        }
    } else
    {

        mensaje(objeto, mensajeError);
        contador++;
    }

    if (contador === 0)
    {

        mensaje(objeto, mensajeError);
    }
}
function visualizarErrores(objeto)
{
    var _for = objeto.attr("for");


    $('#' + _for).text("");

    if (errores.length > 0)
    {
        $('#' + _for).show(500);
    } else
    {
        $('#' + _for).hide(500);
    }

    for (var a = 0; a < errores.length; a++)
    {

        var li = document.createElement('li');
        li.innerHTML = [errores[a]].join('');
        document.getElementById(_for).insertBefore(li, null);
    }
}
function dataAjax(objeto)
{

    name = objeto.attr("name");
    switch (name)
    {
        case "validarSM":
            var ajax_data = {
                "descripcion": objeto.val()
            };
            return ajax_data;
            break;
        case "validarSMModificar":
            var ajax_data = {
                "descripcion": objeto.val(),
                "idSM": $("#descripcionModificar").val()
            };
            return ajax_data;
            break;
        case "agregarSM":

            var ajax_data = {
                "descripcion": $('#txtAgregarDescripcion').val()
            };
            return ajax_data;
            break;
        case "modificarSM":

            var ajax_data = {
                "descripcion": $('#txtModificarDescripcion').val(),
                "idSM": $('#descripcionModificar').val()
            };
            return ajax_data;
            break;
        case "borrarSM":

            var ajax_data = {
                "idSM": $('#hidIdBorrarSM').val()
            };
            return ajax_data;
            break;
        case "agregarGL":

            var ajax_data = {
                "descripcion": $('#txtAgregarDescripcion').val()
            };
            return ajax_data;
            break;
        case "validarGL":
            var ajax_data = {
                "descripcion": objeto.val()
            };
            return ajax_data;
            break;
        case "modificarGL":

            var ajax_data = {
                "descripcion": $('#txtModificarDescripcion').val(),
                "idGL": $('#descripcionModificar').val()
            };
            return ajax_data;
            break;
        case "validarGLModificar":
            var ajax_data = {
                "descripcion": objeto.val(),
                "idGL": $("#descripcionModificar").val()
            };
            return ajax_data;
            break;
        case "borrarGL":

            var ajax_data = {
                "idGL": $('#hidIdBorrarGL').val()
            };
            return ajax_data;
            break;
    }
}
function jsonAjax(objeto)
{
    name = objeto.attr("name");

    var jsonObj = '[{"id":"agregarSM","url":"' + rutaProyecto + 'agregarSM","dataType":"json", "type":"POST"},\n\
                    {"id":"modificarSM","url":"' + rutaProyecto + 'modificarSM","dataType":"json", "type":"POST"},\n\
                    {"id":"validarSM","url":"' + rutaProyecto + 'validarSM","dataType":"json", "type":"POST"},\n\
                    {"id":"validarSMModificar","url":"' + rutaProyecto + 'validarSMModificar","dataType":"json", "type":"POST"},\n\
                    {"id":"borrarSM","url":"' + rutaProyecto + 'borrarSM","dataType":"json", "type":"POST"},\n\
                    {"id":"agregarGL","url":"' + rutaProyecto + 'agregarGL","dataType":"json", "type":"POST"},\n\
                    {"id":"validarGL","url":"' + rutaProyecto + 'validarGL","dataType":"json", "type":"POST"},\n\
                    {"id":"modificarGL","url":"' + rutaProyecto + 'modificarGL","dataType":"json", "type":"POST"},\n\
                    {"id":"validarGLModificar","url":"' + rutaProyecto + 'validarGLModificar","dataType":"json", "type":"POST"},\n\
                    {"id":"borrarGL","url":"' + rutaProyecto + 'borrarGL","dataType":"json", "type":"POST"}]';
    var retornaJson;
    var json = $.parseJSON(jsonObj);
    $(json).each(function (i, val) {

        if (val.id === name)
        {
            retornaJson = '[{"id":"' + val.id + '","url":"' + val.url + '","dataType":"' + val.dataType + '", "type":"' + val.type + '"}]';
        }

    });
    return retornaJson;
}
function successAjax(data, objeto)
{

    name = objeto.attr("name");
    id = objeto.attr("id");
    var tipo;

    var contador = 0;
    switch (name)
    {

        case "validarSM":
        case "validarSMModificar":
        case "validarGL":
        case "validarGLModificar":

            if (data.estado === false)
            {
                retornaValidarUnico = true;
                $("." + id).removeClass("form-group has-success");
                $("." + id).addClass("form-group has-error");
                eliminarElementosErrores(objeto);
                agregarElemntosErrores(contador, objeto, 9);
            } else
            {
                $("." + id).removeClass("form-group has-error");
                $("." + id).addClass(id + "form-group has-success");
                eliminarElementosErrores(objeto);
            }
            break;
        case "agregarSM":
        case "borrarSM":
        case "modificarSM":

            if (name === "agregarSM")
            {
                tipo = "ingresados";
                $("#agregarSM").modal("hide");
            } else if (name === "borrarSM")
            {
                tipo = "borrados";
                $("#borrarSM").modal("hide");
            } else if (name === "modificarSM")
            {
                tipo = "modificado";
                $("#modificarSM").modal("hide");
            }

            $("#retornoSM").modal("show");
            $('#mensajeRetornoSM').text("");
            if (data.estado === true)
            {
                $('#mensajeRetornoSM').append('<div class="alert alert-success alert-dismissable">\n\
                                        <h4>\n\
                                            <i class="icon fa fa-save"></i>Datos ' + tipo + ' con Exito!!!</h4>\n\
                                    </div>');
                location.reload();
            } else
            {
                $('#mensajeRetornoSM').append('<div class="alert alert-danger alert-dismissable">\n\
                                                    <h4>\n\
                                                        <i class="icon fa fa-ban"></i>Datos no fueron ' + tipo + ' con Exito!!!\n\
                                                    </h4>\n\
                                                    <ul>\n\
                                                        <li>' + data.errores + '</li>\n\
                                                    </ul>\n\
                                                </div>');
            }
            break;
        case "agregarGL":
        case "modificarGL":
        case "borrarGL":
            if (name === "agregarGL")
            {
                tipo = "ingresados";
                $("#agregarGL").modal("hide");
            } else if (name === "modificarGL")
            {
                tipo = "modificado";
                $("#modificarGL").modal("hide");
            } else if (name === "borrarGL")
            {
                tipo = "borrados";
                $("#borrarGL").modal("hide");
            }

            $("#retornoGL").modal("show");
            $('#mensajeRetornoGL').text("");
            if (data.estado === true)
            {
                $('#mensajeRetornoGL').append('<div class="alert alert-success alert-dismissable">\n\
                                        <h4>\n\
                                            <i class="icon fa fa-save"></i>Datos ' + tipo + ' con Exito!!!</h4>\n\
                                    </div>');
                location.reload();
            } else
            {
                $('#mensajeRetornoGL').append('<div class="alert alert-danger alert-dismissable">\n\
                                                    <h4>\n\
                                                        <i class="icon fa fa-ban"></i>Datos no fueron ' + tipo + ' con Exito!!!\n\
                                                    </h4>\n\
                                                    <ul>\n\
                                                        <li>' + data.errores + '</li>\n\
                                                    </ul>\n\
                                                </div>');
            }
            break;
    }
}
function ajax(id, objeto)
{


    var infoJson = jsonAjax(objeto);
    var type;
    var url;
    var dataType;


    var json = $.parseJSON(infoJson);
    $(json).each(function (i, val) {

        type = val.type;
        if (id !== 0)
        {
            url = val.url + id;
        } else
        {
            url = val.url;
        }

        dataType = val.dataType;
    });

    var data_Ajax = dataAjax(objeto);


    $.ajax({
        type: type,
        url: url,
        async: false,
        data: data_Ajax,
        dataType: dataType,
        success: function (data)
        {

            successAjax(data, objeto);
        }
    });
}

function cargaInformacionModificarSM(idSM)
{

    var url = rutaProyecto + "visualizarSM/";
    $.ajax({
        type: "POST",
        url: url,
        data: {"idSM": idSM},
        async: false,
        dataType: 'json',
        success: function (data) {
            successAjaxListar(data, "modificarSM");
        }
    });
}
function cargaInformacionBorrarSM(idSM)
{
    var url = rutaProyecto + "visualizarSM/";
    $.ajax({
        type: "POST",
        url: url,
        data: {"idSM": idSM},
        async: false,
        dataType: 'json',
        success: function (data) {
            successAjaxListar(data, "borrarSM");
        }
    });
}
function cargaInformacionModificarGL(idGL)
{

    var url = rutaProyecto + "visualizarGL/";
    $.ajax({
        type: "POST",
        url: url,
        data: {"idGL": idGL},
        async: false,
        dataType: 'json',
        success: function (data) {
            successAjaxListar(data, "modificarGL");
        }
    });
}
function cargaInformacionBorrarGL(idGL)
{
    var url = rutaProyecto + "visualizarGL/";
    $.ajax({
        type: "POST",
        url: url,
        data: {"idGL": idGL},
        async: false,
        dataType: 'json',
        success: function (data) {
            successAjaxListar(data, "borrarGL");
        }
    });
}
function successAjaxListar(data, nombre)
{

    var tipo;
    switch (nombre)
    {

        case "modificarSM":
        case "borrarSM":
            tipo = "cargados";

            if (data.estado === false)
            {
                $("#retornoSM").modal("show");
                $('#mensajeRetornoSM').text("");
                $('#mensajeRetornoSM').append('<div class="alert alert-danger alert-dismissable">\n\
                                                    <h4>\n\
                                                        <i class="icon fa fa-ban"></i>Datos no fueron ' + tipo + ' con Exito!!!\n\
                                                    </h4>\n\
                                                    <ul>\n\
                                                        <li>' + data.errores + '</li>\n\
                                                    </ul>\n\
                                                </div>');
            } else
            {
                if (nombre === "modificarSM")
                {
                    $("#modificarSM").modal("show");
                    $('#txtModificarDescripcion').val(data.descripcion);
                    $('#descripcionModificar').val(data.idSM);
                } else if (nombre === "borrarSM")
                {

                    $("#borrarSM").modal("show");
                    $('#lblNombreSM').text(data.descripcion);
                    $('#hidIdBorrarSM').val(data.idSM);
                }
            }
            break;
        case "modificarGL":
        case "borrarGL":

            tipo = "cargados";

            if (data.estado === false)
            {
                $("#retornoGL").modal("show");
                $('#mensajeRetornoGL').text("");
                $('#mensajeRetornoGL').append('<div class="alert alert-danger alert-dismissable">\n\
                                                    <h4>\n\
                                                        <i class="icon fa fa-ban"></i>Datos no fueron ' + tipo + ' con Exito!!!\n\
                                                    </h4>\n\
                                                    <ul>\n\
                                                        <li>' + data.errores + '</li>\n\
                                                    </ul>\n\
                                                </div>');
            } else
            {
                if (nombre === "modificarGL")
                {
                    $("#modificarGL").modal("show");
                    $('#txtModificarDescripcion').val(data.descripcion);
                    $('#descripcionModificar').val(data.idGL);
                }
                 else if (nombre === "borrarGL")
                {

                    $("#borrarGL").modal("show");
                    $('#lblNombreGL').text(data.descripcion);
                    $('#hidIdBorrarGL').val(data.idGL);
                }
            }
             break;
    }
}
function listaSM()
{

    var url = rutaProyecto + "listarSM";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        dataType: 'json',
        success: function (data) {

            $(data).each(function (i, dato) {
                $('#tablaSM').append('<tr>\n\
                                        <td>' + dato.descripcion + '</td>\n\
                                        <td>\n\
                                            <button class="btn btn-success btn-sm" onclick="cargaInformacionModificarSM(&#39' + dato.idSM + '&#39);">\n\
                                                <i class="fa fa-edit"></i> \n\
                                            </button>\n\
                                        </td>\n\
                                        <td>\n\
                                            <button class="btn btn-danger btn-sm"  onclick="cargaInformacionBorrarSM(&#39' + dato.idSM + '&#39);">\n\
                                                <i class="fa fa-remove"></i>\n\
                                            </button>\n\
                                        </td>\n\
                                    </tr>');
            });

        }
    });
}
function listaGL()
{

    var url = rutaProyecto + "listarGL";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        dataType: 'json',
        success: function (data) {

            $(data).each(function (i, dato) {
                $('#tablaGL').append('<tr>\n\
                                        <td>' + dato.descripcion + '</td>\n\
                                        <td>\n\
                                            <button class="btn btn-success btn-sm" onclick="cargaInformacionModificarGL(&#39' + dato.idGL + '&#39);">\n\
                                                <i class="fa fa-edit"></i> \n\
                                            </button>\n\
                                        </td>\n\
                                        <td>\n\
                                            <button class="btn btn-danger btn-sm" onclick="cargaInformacionBorrarGL(&#39' + dato.idGL + '&#39);">\n\
                                                <i class="fa fa-remove"></i>\n\
                                            </button>\n\
                                        </td>\n\
                                    </tr>');
            });

        }
    });
}
            