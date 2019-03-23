(function(){

//validacion de correo
    $("#inputMail").on('blur', function(){
        console.log('perdi el foco');
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         if(!re.test($("#inputMail").val())){
            $('.error-email').html('Ingrese un email valido');
            }
        });
    })();
    //validar nombre
    (function(){
    
        $("#input01").on('blur', function(){
            console.log('perdi el foco');
            let renom = /^[a-zA-Z]|[[:blank:]]$/;
     
            if(!renom.test($("#input01").val())){
                $('.error-input01').html('Ingrese un nombre valido');
            }
        });
    })();

    //validar apellido
    (function(){
    
        $("#input02").on('blur', function(){
            console.log('perdi el foco');
            let renom = /^[a-zA-Z]|[[:blank:]]$/;
     
            if(!renom.test($("#input02").val())){
                $('.error-input02').html('Ingrese un apellido valido');
            }
        });
    })();

    // validar numeros numeros
(function(){
    
    $("#input03").on('blur', function(){
        console.log('perdi el foco');
        let renom = /^[0-9]+$/;
 
        if(!renom.test($("#input03").val())){
            $('.error-input03').html('Ingrese un numero de identificacion valido');
        }
    });
})();

(function(){
    
    $("#input06").on('blur', function(){
        console.log('perdi el foco');
        let renom = /^[0-9]+$/;
 
        if(!renom.test($("#input06").val())){
            $('.error-input06').html('Ingrese un numero de telefono valido');
        }
    });
})();
 
// funcion contrasena
(function(){
    
    $("#inputPassword").on('blur', function(){
        console.log('perdi el foco');
        let renom = /^[a-zA-Z]|[[:blank:]]$/;
 
        if(!renom.test($("#inputPassword").val())){
            $('.error-inputPassword').html('Ingrese almenos 5 caracteres');
        }
    });
})();
