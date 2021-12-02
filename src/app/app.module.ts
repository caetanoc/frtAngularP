import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';

// PIPES: https://angular.io/guide/pipes

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { CadastrarClientesComponent } from './components/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { AtualizarClientesComponent } from './components/clientes/atualizar-clientes/atualizar-clientes.component';



registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListarProdutosComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
    ListarClientesComponent,
    CadastrarClientesComponent,
    AtualizarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SweetAlert2Module.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
