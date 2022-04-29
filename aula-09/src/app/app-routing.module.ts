import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { PlataformasComponent } from './views/plataformas/plataformas.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  //cada rota tem por obrigação duas declarações, path e component
  {  //isso é a declaração de um obbjeto em javascript
    path:'jogos', //isso é a declaração do caminho da rota
    component: JogosComponent //isso é a declaração do componente para a rota
  },
  {
    path:'plataforma',
    component: PlataformasComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
