import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  response: any = "";
  registro: { [key: string]: any[] } = {};
  sClasse: any = ""; 
  totalePremiClasse: any = ""; 

  async ngOnInit(): Promise<any> {
    this.response = await fetch("http://localhost:8888/getRegister");
    this.registro = await this.response.json();
    console.log(this.registro);
  }

  chiamaClasse(nomeClasse: string): void {
    this.sClasse = nomeClasse;
    this.totalePremiClasse = 0; 
  }

  aggiornaTotalePremi(totale: number): void {
    this.totalePremiClasse = totale;
    console.log(`Premi da figlio: ${totale}`);
  }
}
