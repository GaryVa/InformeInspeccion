import { Component, OnInit } from '@angular/core';
import { InformeService } from '../servicio/informe.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.scss'
})
export class InformesComponent implements OnInit{
  informes: any[] = [];
  selectedInforme:any = {};
  mostrarTabla: boolean = false;

  constructor(private informeServicio: InformeService) { }

  ngOnInit(): void {
    this.informeServicio.getInformePuente().subscribe(data => {
      this.informes = data;
    })
  }

  seleccionInforme(id: number): void {
    this.informeServicio.getInformePuenteByID(id).subscribe(data => {
      this.selectedInforme = data;
      this.mostrarTabla = Object.keys(data).length > 0;
    });
  }

  volver():void {
    this.mostrarTabla = false;
  }
}
