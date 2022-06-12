import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/domain/Automovil';
import { AutomovilService } from 'src/app/services/automovil.service';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.scss']
})
export class AutomovilesComponent implements OnInit {

  auto: Automovil = new Automovil();
  autos: any;

  constructor(private automovilService: AutomovilService) { }

  ngOnInit(): void {
    this.cargarAutos();
  }

  guardar() {
    this.automovilService.save(this.auto).subscribe(data => {
      console.log(data);
      this.cargarAutos();
    })
  }

  cargarAutos() {
    this.autos = this.automovilService.getAutos();
  }

}
