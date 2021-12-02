import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;

  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/julia.png';
  dataValidade = '2021-12-31';

  constructor() {
    // Variaveis de string com concatenação
    // this.anuncio = 'O ' + this.nomeProduto + ' está em promoção!';

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ',  this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção:', this.promocao);
   }
  listaProdutos:any[] = [
    {nome: 'Curso de Angular', preco: 356.66, validade: '2021-12-30', id:1, promocao: true, foto: 'assets/img/angular.png'},
    {nome: 'Curso de Ionic', preco: 312.66, validade: '2021-12-30', id:2, foto: 'assets/img/ionic.jpg', promocao: false},
    {id:3, nome: 'Curso de Angular Avançado', preco: 662.99, validade: '2021-12-30' , promocao: true, foto: 'assets/img/angularadv.png'},
    {id:5, nome: 'Curso Java Básico', preco: 433.99, validade: '2021-12-30', foto: 'assets/img/java.jpg' },
    {id:4, nome: 'Curso React Básico', preco: 265.99, validade: '2021-12-30', foto: 'assets/img/react.png' },
    {id:6, nome: 'Curso Julia Básico', preco: 165.99, validade: '2021-10-30', foto: 'assets/img/julia.png' }

  ]



  ngOnInit(): void {
  }

}
