import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ParentComponent}  from './parent.component';
import {ChildOneComponent}  from './childone.component';
import {ChildTwoComponent}  from './childtwo.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'CO', component: ChildOneComponent },
   { path: 'CT', component: ChildTwoComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, 
                 ChildOneComponent,
				 ChildTwoComponent
  ],
 
  
  
  imports: [
   BrowserModule,
   RouterModule.forRoot(appRoutes), 
   HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    ParentComponent]
})
export class AppModule { }
