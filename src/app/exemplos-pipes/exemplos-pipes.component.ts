import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JS algorithms and data structure 2nd Ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co//glqjpRP',
  };

  livros: string[] = ['Java', 'Ionic'];

  filtro: any;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter((v: string) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
