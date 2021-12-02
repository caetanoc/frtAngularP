import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

  salvarProduto():void{
    this.produtosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this,this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi Atualizado com sucesso. `,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });

  }
}
