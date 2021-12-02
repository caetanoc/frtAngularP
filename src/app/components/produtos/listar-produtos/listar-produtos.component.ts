import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos:IProduto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno =>
      { this.listaProdutos = retorno;}
    );
  }

  deletar(produto: IProduto): void {
    this.produtosService.excluir(produto.id).subscribe(() => {
      this.produtosService.exibirMensagem(
        'Sistema',
        `${produto.nome} foi excluido com sucesso`,
        'toast-error'
      );
      this.carregarProdutos();
    })
  }

}
