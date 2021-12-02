import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  listaClientes:ICliente[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void{
    this.clientesService.buscarTodos().subscribe(retorno =>
      { this.listaClientes = retorno;}
    );
  }

  deletar(cliente: ICliente): void {
    this.clientesService.excluir(cliente.id).subscribe(() => {
      this.clientesService.exibirMensagem(
        'Sistema',
        `${cliente.nome} foi excluido com sucesso`,
        'toast-error'
      );
      this.carregarClientes();
    })
  }

}
