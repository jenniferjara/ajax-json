var plantilla = "<div>"+ 
	"<p><strong>Nombre: </strong>__nombre__</p>"+
	"<p><strong>Fecha de Nacimiento: </strong>__fechaNac__</p>"+
	"<p><strong>Lugar de Nacimiento: </strong>__lugarNac__</p>"+
	"<p><strong>Género Musical: </strong>__genMus__</p>"+
	"</div>";

var iniciar = function(){
	$.ajax({
		url: "http://localhost:1500/demo.json",
		type: "GET",
		success:function(response){
			$("#datos").html(plantilla
				.replace("__nombre__", response.nombre)
				.replace("__fechaNac__", response.fechNac)
				.replace("__lugarNac__", response.lugarNac)
				.replace("__genMus__", response.genMus)
				);
			var influencias = "<ul>";
			for(var i = 0, l = response.influencias.length; i<l; i++){
				influencias += "<li>"+response.influencias[i]+"</li>";
			}
			influencias += "</ul>";
			$("#influ").html(influencias);

			var canciones = "<ul>";
			for(var i = 0, l = response.canciones.length; i<l; i++){
				canciones += "<li>"+response.canciones[i]+"</li>";
			}
			canciones += "</ul>";
			$("#song").html(canciones);
		}
	});
}
$(document).ready(iniciar);