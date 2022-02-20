import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtonovo } from '../models/produtonovo';

@Injectable({
  providedIn: 'root'
})
export class ProdutonovoService {
  url= "http://localhost:3000/novosProdutos"

  constructor(private httpClient: HttpClient) { }

  getprodutosnovos():Observable <Produtonovo[]> {
    return this.httpClient.get<Produtonovo[]>(this.url)
  }
}
