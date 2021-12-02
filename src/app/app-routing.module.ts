import { AtualizarClientesComponent } from './components/clientes/atualizar-clientes/atualizar-clientes.component';
import { CadastrarClientesComponent } from './components/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ListarProdutosComponent},
  {path: 'produtos/cadastrar', component: CadastrarProdutoComponent},
  {path: 'produtos/atualizar/:id', component: AtualizarProdutoComponent},
  {path: 'clientes', component: ListarClientesComponent},
  {path: 'clientes/cadastrar', component: CadastrarClientesComponent},
  {path: 'clientes/atualizar/:id', component: AtualizarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
