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
  seleccionInformeId: number | null = null;

  constructor(private informeServicio: InformeService) { }

  ngOnInit(): void {
    this.informeServicio.getInformePuente().subscribe(data => {
      this.informes = data;
    })
  }

  seleccionInforme(id: number): void {
    this.informeServicio.getInformePuenteByID(id).subscribe(data => {
      this.selectedInforme = data;
    }, error => { //en caso de no poder acceder a la api consigue los datos de la llamada anterior
      console.log("error al conseguir los datos de la api", error);
      this.seleccionInformeId = id;
      this.selectedInforme = this.informes.find(dato => dato.idInforme === id);
    });
  }

  resetId(): void {
    this.seleccionInformeId = null;
  }

}
