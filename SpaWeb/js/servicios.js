var app = new function() {
        var servicio1 = {
          servicio: "Depilacion",
          descripcion: "Depilación con cera caliente",
		  sucursal:"Centro",
		  duracion: "30 minutos",
          hora: new Date(2021,11,22,9,30),
          costobase: 500,
          costoneto: 0,
          reservas: [22]
        };
		
        var servicio2 = {
          servicio:"Faciales" ,
          descripcion:"Vegan Facial Express",
		  duracion: "120 minutos",
		  sucursal:"Sur",
          hora: new Date(2021, 11, 23, 11,00),
          costobase: 450,
          costoneto: 0,
          reservas: []
        };
		
        var servicio3 = {
          servicio: "Masajes",
          descripcion: "Masaje Relajante",
		  sucursal:"Centro",
          hora: new Date(2021, 11, 24,14,10),
          costobase: 600,
          costoneto: 0,
          reservas: []
        };
		
        var servicio4 = {
          servicio: "Masajes",
          descripcion: "Masaje Focalizado",
		  sucursal:"Sur",
          hora: new Date(2021, 11, 25,09, 00),
          costobase: 550,
          costoneto: 0,
          reservas: []
        };
        var servicio5 = {
          servicio: "Masajes",
          descripcion: "Lumboterapia",
		  sucursal:"Centro",
          hora: new Date(2021, 11, 26, 21,05),
          costobase: 200,
          costoneto: 0,
          reservas: []
        };
		
		var servicio6 = {
          servicio: "Faciales",
          descripcion: "HOLISTIC FACIAL EXPERIENCE",
		  sucursal:"Centro",
           hora: new Date(2021,11,22,10,30),
          costobase: 500,
          costoneto: 0,
          reservas: []
        };
		
		var servicio7 = {
          servicio: "Faciales",
          descripcion: "SLOW VEGAN CLEANSING FACIAL",
		  sucursal:"Centro",
           hora: new Date(2021,11,22,11,30),
          costobase: 500,
          costoneto: 0,
          reservas: []
        };
		
		var servicio8 = {
          servicio: "Depilacion",
          descripcion: "DEPILACION LASER",
		  sucursal:"Centro",
           hora: new Date(2021,11,22,9,30),
          costobase: 500,
          costoneto: 0,
          reservas: []
        };
		
		var servicio9 = {
          servicio: "Depilacion",
          descripcion: "DEPILACIONES CON CERA TIBIA",
		  sucursal:"Centro",
           hora: new Date(2021,11,22,9,30),
          costobase: 500,
          costoneto: 0,
          reservas: []
        };
		
		var servicio10 = {
          servicio: "Depilacion",
          descripcion: "Reflexologia",
		  sucursal:"Centro",
           hora: new Date(2021,11,22,9,30),
          costobase: 500,
          costoneto: 0,
          reservas: []
        };
		
        this.servicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7, servicio8, servicio9, servicio10 ];
        for (var i = 0; i < this.servicios.length; i++) {
          var aumentomanana = 0;
          var aumentofindesemana = 0;
          if (this.servicios[i].hora.getHours() <= 12) {
            aumentomanana = this.servicios[i].costobase * 0.05; 
          }
          if (this.servicios[i].hora.getDay() == 6 || this.servicios[i].hora.getDay() == 7) {
            aumentofindesemana = this.servicios[i].costobase * 0.1; 
          }
          this.servicios[i].costoneto = this.servicios[i].costobase + aumentomanana + aumentofindesemana;
        }
  
        this.mostrarservicios = function() {
          var data = '<br>';
          if (this.servicios.length > 0) {
            for (i = 0; i < this.servicios.length; i++) {
              var hora = this.servicios[i].hora.getHours() < 10 ? '0' + this.servicios[i].hora.getHours() : this.servicios[i].hora.getHours();
              var minutos = this.servicios[i].hora.getMinutes() < 10 ? '0' + this.servicios[i].hora.getMinutes() : this.servicios[i].hora.getMinutes();
              data += '<tr>';
              data += '<td>servicio # '+ (i+1) + ' Servicio: ' + this.servicios[i].servicio + ', DESCRIPCION: ' + this.servicios[i].descripcion + ', Sucursal: ' + this.servicios[i].sucursal + ', Hora: ' + this.servicios[i].hora.toDateString() + " " + hora + ":" + minutos + '</td>';
              data += '<td><button onclick="app.Reservar(' + i + ')">Reservar</button></td>';
              data += '</tr>';
            }
          }
          document.getElementById('servicios').innerHTML = data;
          document.getElementById('servicios').style.display = 'block';
        };

        this.Reservar = function (item) {
          var el = document.getElementById('documento');
		  document.getElementById('documento').value = "";
          document.getElementById('datosservicio').style.display = 'block';
          document.getElementById('servicios').style.display = 'none';
          document.getElementById('menu1').style.display = 'none';
          document.getElementById('menu2').style.display = 'none';
          document.getElementById('btnback').style.display = 'block';

          var impuesto = this.servicios[item].costobase == this.servicios[item].costoneto ? '' : 'Impuesto mañana y/o fin de semana'; 
          var hora = this.servicios[item].hora.getHours() < 10 ? '0' + this.servicios[item].hora.getHours() : this.servicios[item].hora.getHours();
          var minutos = this.servicios[item].hora.getMinutes() < 10 ? '0' + this.servicios[item].hora.getMinutes() : this.servicios[item].hora.getMinutes();

          document.getElementById('datosservicio').innerHTML = "Item # " + (item + 1) + ":<br>SERVICIO: " + this.servicios[item].servicio + '<br>DESCRIPCION: ' + this.servicios[item].descripcion + ":<br>SUCURSAL: " + this.servicios[item].sucursal + '<br>Hora: ' + this.servicios[item].hora.toDateString() + " " + hora + ":" + minutos + '<br>PRECIO BASE: $' + this.servicios[item].costobase + '<br>PRECIO NETO: $' + this.servicios[item].costoneto + " " + impuesto;
          document.getElementById('campodoc').style.display = 'block';
		  
          self = this;
          document.getElementById('reserva-edit').onsubmit = function() {
            var d = el.value * 1;
            if (isNaN(d) || d == 0) {
              window.alert("Ingrese un dato correcto");
            }else{
              var flag = false;
              for (j = 0; j < self.servicios.length; j++) {
                var auxDoc = self.servicios[j].reservas.indexOf(d)
                if (auxDoc != -1) {
                  if (self.servicios[j].hora.getFullYear() == self.servicios[item].hora.getFullYear() &&
                    self.servicios[j].hora.getMonth() == self.servicios[item].hora.getMonth() &&
                    self.servicios[j].hora.getDate() == self.servicios[item].hora.getDate()) {
                    flag = true;
                    break;
                  }
                }
              }
              if (flag) {
                window.alert("Error: usted ya tiene reservado una cita para esta fecha");
              }else{
                self.servicios[item].reservas.push(d);
                window.alert("Cita reservada correctamente");
                document.getElementById('menu1').style.display = 'block';
                document.getElementById('menu2').style.display = 'block';
                document.getElementById('datosservicio').style.display = 'none';
                document.getElementById('campodoc').style.display = 'none';

                document.getElementById('btnback').style.display = 'none';
              }
            }
          }
        };

         this.consultarReserva = function () {
          var el = document.getElementById('docConsulta');
          var d = el.value * 1;
          if (isNaN(d) || d == 0) {
              window.alert("Ingrese un dato correcto");
          }else{
            var data = '<br>CITAS RESERVADAS DE ' + d;
            for (i = 0; i < this.servicios.length; i++) {
              var auxDoc = this.servicios[i].reservas.indexOf(d)
              if (auxDoc != -1) {
                var hora = this.servicios[i].hora.getHours() < 10 ? '0' + this.servicios[i].hora.getHours() : this.servicios[i].hora.getHours();
                var minutos = this.servicios[i].hora.getMinutes() < 10 ? '0' + this.servicios[i].hora.getMinutes() : this.servicios[i].hora.getMinutes();
                data += '<tr>';
                data += '<td>Cita # '+ (i+1) + "= Servicio: " + this.servicios[i].servicio + ', DESCRIPCION: ' + this.servicios[i].descripcion + ', SUCURSAL: ' + this.servicios[i].sucursal + ', HORA: ' + this.servicios[i].hora.toDateString() + " " + hora + ":" + minutos + '</td>';
                data += '</tr>';
              }
            }
            if (data == '<br>CITAS RESERVADAS DE ' + d) {
              window.alert("No existen Citas asociados a dicho documento");
            }else{
              document.getElementById('menu1').style.display = 'none';
              document.getElementById('menu2').style.display = 'none';
              document.getElementById('servicios').style.display = 'block';
              document.getElementById('servicios').innerHTML = data;
              document.getElementById('btnback').style.display = 'block';
            }
          }
        };

        this.Volver = function (){
          document.getElementById('datosservicio').style.display = 'none';
          document.getElementById('campodoc').style.display = 'none';
          document.getElementById('servicios').style.display = 'none';
          document.getElementById('btnback').style.display = 'none';
          document.getElementById('menu1').style.display = 'block';
          document.getElementById('menu2').style.display = 'block';
          document.getElementById('docConsulta').value = "";
        };
}