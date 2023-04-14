import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/emploi';
@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listEmploi: Emploi[] = [
    { reference: "AAAA", title: "emploi 1", entreprise: "VDS1", etat: true },
    { reference: "BBBB", title: "emploi 2", entreprise: "VDS2", etat: false },
    { reference: "CCCC", title: "emploi 2", entreprise: "VDS3", etat: false },
    { reference: "DDD", title: "emploi 4", entreprise: "VDS4", etat: true }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  inc = 0;
  availableEmploi(inc: number) {
    for (let i = 0; i < this.listEmploi.length; i++) {
      if (this.listEmploi[i].etat == true)
        this.inc++;
    }
  }
}
