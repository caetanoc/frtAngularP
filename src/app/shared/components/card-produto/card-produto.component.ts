import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string;
  @Input() nomeProduto: string;
  @Input() promocao: boolean;
  @Input() idProduto: number;
  @Input() dataValidade: string;
  @Input() precoProduto: number;


  constructor() { }

  ngOnInit(): void {
  }

}
