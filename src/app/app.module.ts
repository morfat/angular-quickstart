import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//main app component 
import { AppComponent } from './app.component';

//import other modules 
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthenticationModule} from './authentication/authenticate.module';

//components
import { HeaderComponent }   from './_navigations/header.component';
import { SideBarComponent }   from './_navigations/side-bar.component';
import { FooterComponent }   from './_navigations/footer.component';

//import providers

import {GlobalService} from './_globals/global.service';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SideBarComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    RouterModule,
    //app modules . preserve the order so that urls match well 
    AuthenticationModule,
    DashboardModule,
    
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
