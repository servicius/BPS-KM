import { Component, 
Input, Output, 
EventEmitter,
OnInit 
} from '@angular/core';

import { IProduct } from './products';
import { ProductService } from './products.services';

import { appService } from './app.service';

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, appService]
})
export class AppComponent {
//<app-root [(counter)]="counterValue"

//<button (click)="decrement()">-</button>
//    <span>{{counter}}</span>
//<button (click)="increment()">+</button>

//<p><code>counterValue = {{counterValue}}</code></p>

  counterValue = 0;
  @Output('counter') counterChange = new EventEmitter();
  
  @Input('counter')
  get counter() {
    return this.counterValue; 
  }
  
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
  
  decrement() {
    this.counter--;
  }
  
  increment() {
    this.counter++;
  }

//<app-root  [user]="name" (userChange)="handleOutput()" ></app-root>
//<h1>Hi {{user1}}</h1><button (click)="sayMyName()">Say my {{user1}} name</button>

handleOutput() {
    
    //this.user1='USER10';
    console.log('emitted');
  }
  
  title = 'My First Angular App';

name: string;
@Input('user')  user1: string;

@Output('userChange') userChange1 = new EventEmitter();

myname: string;

  iproducts: IProduct[];
  
   aservice: string = ""; 
 
   
  constructor(private _product: ProductService,
  private _appService: appService) 
  {
    this.name='Virgo';
    this.myname = 'Marcel';
  }
  
  ngOnInit() 
    {
        //this.sayMyName();
    this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
      this.aservice = this._appService.getApp(); 
    }
    
sayMyName() 
  {
this.user1='MarcelVirgo';
this.userChange1.emit();

console.log('My name is', this.name);
  }  
 
}
