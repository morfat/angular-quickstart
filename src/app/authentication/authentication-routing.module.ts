import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//components
import { LoginIndexComponent }   from './login.component';


const routes: Routes = [
  {path:'login',component:LoginIndexComponent},
];

@NgModule({
  declarations:[LoginIndexComponent],
  imports: [ RouterModule.forRoot(routes),FormsModule ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}