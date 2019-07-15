import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {
  @Input() month: any;
  public name: string;
  constructor() {
   }

  ngOnInit() {
    console.log(this.month);
    switch (this.month) {
      case 1: this.name = 'Enero'; break;
      case 2: this.name = 'Febrero'; break;
      case 3: this.name = 'Marzo'; break;
      case 4: this.name = 'Abril'; break;
      case 5: this.name = 'Mayo'; break;
      case 6: this.name = 'Junio'; break;
      case 7: this.name = 'Julio'; break;
      case 8: this.name = 'Agosto'; break;
      case 9: this.name = 'Septiembre'; break;
      case 10: this.name = 'Octubre'; break;
      case 11: this.name = 'Noviembre'; break;
      case 12: this.name = 'Diciembre'; break;
    }
  }

}
