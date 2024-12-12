import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  @Input() nomeClasse: any = "";
  
  @Output() totalePremi = new EventEmitter<number>();

  response:any = ""
  studenti:any = "";
  premi:any = 0;


  async calcolaPremi(n: any): Promise<void> {
    await this.visualizzaStudenti(n);
    this.premi = 0;
    for (const studente of this.studenti) {
      this.premi += studente.premi;
    }

    console.log(this.premi);
    this.totalePremi.emit(this.premi);
  }

  async visualizzaStudenti(nomeClasse: string): Promise<void> {
    const response = await fetch("http://localhost:8888/getStudents", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: JSON.stringify({ classe: nomeClasse })
    });
    this.studenti = await response.json();
    console.log(this.studenti); 
  }

}
