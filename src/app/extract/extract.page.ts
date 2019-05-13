import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-extract',
  templateUrl: 'extract.page.html',
  styleUrls: ['extract.page.scss']
})
export class ExtractPage implements OnInit {

  public listLancamentos: Array<{}> = new Array<{}>();
  public listaControleLancamento: Array<{}> = new Array<{}>();
  private lancamentoContaLegado: {};

  constructor(public httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8080/extract')
      .subscribe(data => {
        this.lancamentoContaLegado = data;
        console.log('lancamentoContaLegado: ', this.lancamentoContaLegado);
        this.listLancamentos.push(this.lancamentoContaLegado);

        this.lancamentoContaLegado['listaControleLancamento'].forEach(element => {
          this.listaControleLancamento.push(element);
        });
      });
  }

  ngOnInit() {
  }
}
