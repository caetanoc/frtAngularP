import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  cliente: ICliente = {
    nome: null,
    cadastro: null,
    cpf: null
  };

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarCliente():void{
    this.clientesService.cadastrar(this.cliente).subscribe(retorno => {
      this.cliente = retorno;
      this,this.clientesService.exibirMensagem(
        'Sistema',
        `${this.cliente.nome} foi cadastrado com sucesso. ID: ${this.cliente.id}`,
        'toast-success'
      );
      this.router.navigate(['/clientes']);
    });

  }
}
