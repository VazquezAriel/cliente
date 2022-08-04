import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/CLiente';
import { AutomovilService } from 'src/app/services/automovil.service';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.scss']
})
export class AutomovilesComponent implements OnInit {

  cliente: String = "";
  autos: any;
  imagen: any;

  constructor(private automovilService: AutomovilService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos() {

    this.automovilService.getDatos().subscribe(data => {
      console.log(data)
      this.cliente = data
    })

  }


}
