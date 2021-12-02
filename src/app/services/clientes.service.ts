import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { ICliente } from './../model/ICliente.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private URL: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<ICliente[]> {
     return this.http.get<ICliente[]>(this.URL).pipe(
       map(retorno => retorno),
       catchError(erro => this.exibirErro(erro))
     );
  }

  buscarPorId(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
 }

  cadastrar(cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(this.URL, cliente).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
 }

 atualizar(cliente: ICliente): Observable<ICliente> {
  return this.http.put<ICliente>(`${this.URL}/${cliente.id}`, cliente).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))
  );
}

 excluir(id: number): Observable<any> {
  return this.http.delete<any>(`${this.URL}/${id}`).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))
  );
}

  exibirErro(e: any): Observable<any> {
    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação!',  'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, msg: string, tipo: string): void {
    this.toastr.show(msg,titulo,{ closeButton: true, progressBar: true}, tipo);
  }
}
