import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//main app component 
import { AppComponent } from './app.component';

//import other modules 
import {DashboardModule} from './dashboard/dashboard.module';

//components
import { HeaderComponent }   from './_navigations/header.component';
import { SideBarComponent }   from './_navigations/side-bar.component';
import { FooterComponent }   from './_navigations/footer.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SideBarComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
