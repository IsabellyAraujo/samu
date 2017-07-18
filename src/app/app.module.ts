import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SamuService }    from './services/samu.service';
import { UFService }    from './services/uf.service';
import { RouterModule }   from '@angular/router';
import { dados_UFComponent } from './dados_UF/dados.component';
import { ResumoComponent } from './resumo/resumo.component';
import { todosComponent } from './todos/todos.component';
@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    todosComponent,
    dados_UFComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dadosUF',
    component: dados_UFComponent
  },
{
  path: 'todos',
  component: todosComponent
}
    ])
],
  providers: [SamuService, UFService],
  bootstrap: [AppComponent]
})
export class AppModule { }
