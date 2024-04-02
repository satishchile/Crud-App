import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditpostComponent } from './editpost/editpost.component';


const route:Routes=[
  {
     path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"createpost",component:CreatepostComponent,

  },
  {
    path:"update/:id",component:EditpostComponent
  },
  {
    path:"**",component:HomeComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatepostComponent,
    UpdatepostComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    [RouterModule.forRoot(route)],
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
