import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//main app component 
import { AppComponent } from './app.component';

//import other modules 
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthenticationModule} from './authentication/authenticate.module';
import {GroupModule} from './groups/group.module';
import {ContentTypeModule} from './content_types/content_type.module';
import {UserModule} from './users/user.module';
import {PaginationModule} from './pagination/pagination.module';
import {PermissionModule} from './permissions/permission.module';


//components
import { HeaderComponent }   from './_navigations/header.component';
import { SideBarComponent }   from './_navigations/side-bar.component';
import { FooterComponent }   from './_navigations/footer.component';

//import providers
import {GlobalService} from './_globals/global.service';

//guards
import {AuthGuard} from './_guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SideBarComponent,FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
   // PaginationModule,
    //app modules . preserve the order so that urls match well 
    AuthenticationModule,
    GroupModule,
    UserModule,
    ContentTypeModule,
    PermissionModule,
    DashboardModule,//this should be always the last module 
    
  ],
  providers: [GlobalService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
