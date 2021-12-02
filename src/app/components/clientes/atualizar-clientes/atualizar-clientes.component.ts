import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-clientes',
  templateUrl: './atualizar-clientes.component.html',
  styleUrls: ['./atualizar-clientes.component.css']
})
export class AtualizarClientesComponent implements OnInit {

  cliente: ICliente = {
    nome: null,
    cadastro: null,
    cpf: null
  };

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.clientesService.buscarPorId(id).subscribe(retorno => {
      this.cliente = retorno;
    });
  }

  salvarCliente():void{
    this.clientesService.atualizar(this.cliente).subscribe(retorno => {
      this.cliente = retorno;
      this,this.clientesService.exibirMensagem(
        'Sistema',
        `${this.cliente.nome} foi cadastrado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['/clientes']);
    });

  }
}
