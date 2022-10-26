import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
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
  {  path: "contacto",
  component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
