import { Component, OnInit } from '@angular/core';
import { Produtonovo } from 'src/app/models/produtonovo';
import { ProdutonovoService } from 'src/app/services/produtonovo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Produtonovo: ProdutonovoService) { }
  
  listaProdutos = [] as Produtonovo[]
  
  carregarProduto(){
    this.Produtonovo.getprodutosnovos().subscribe( (produtosRecebidos:Produtonovo[]) =>{
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos)
    })
  }

  ngOnInit(): void {
    this.carregarProduto()
  }

}
