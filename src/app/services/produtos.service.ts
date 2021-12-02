import { IProduto } from './../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<IProduto[]> {
     return this.http.get<IProduto[]>(this.URL).pipe(
       map(retorno => retorno),
       catchError(erro => this.exibirErro(erro))
     );
  }

  buscarPorId(id: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
 }

  cadastrar(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
 }

 atualizar(produto: IProduto): Observable<IProduto> {
  return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
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
