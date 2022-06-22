import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/domain/Vehiculo';
import { AutomovilService } from 'src/app/services/automovil.service';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.scss']
})
export class AutomovilesComponent implements OnInit {

  auto: Vehiculo = new Vehiculo();
  autos: any;
  imagen: any;

  constructor(private automovilService: AutomovilService) { }

  ngOnInit(): void {
    this.cargarAutos();
  }

  guardar() {
    this.auto.imagen = this.imagen;

    this.automovilService.save(this.auto).subscribe(
      (result:any) => {
        this.automovilService.save(this.auto).subscribe(data => {
          console.log(data)
          this.cargarAutos()
          this.auto = new Vehiculo();
        })
      },
      (error) => {
        console.log("El servidor principal ha fallado pero se establecio conexion con el servidor de respaldo")
        this.automovilService.saveRespaldo(this.auto).subscribe(data => {
          console.log(data)
          this.cargarAutos()
          this.auto = new Vehiculo();
        })
      }
    )
    
  }

  cargarAutos() {
    this.automovilService.getAutos().subscribe(
      (result: any) => {
        this.autos = this.automovilService.getAutos()
      },
      (error) => {
        console.log("El servidor principal ha fallado pero se establecio conexion con el servidor de respaldo")
        this.autos = this.automovilService.getAutosRespaldo()
      }
    );
  }

  mostrarImagen(evento: any) {
    let archivos = evento.target.files
    let reader = new FileReader();

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagen = reader.result;
    }
  }

}
