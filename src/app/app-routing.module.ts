import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: "",
  component: InicioComponent
  },
  {path: "inicio",
  component: InicioComponent
  },
  {  path: "sobremi",
  component: SobreMiComponent
  },
  {  path: "habilidades",
  component: HabilidadesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
