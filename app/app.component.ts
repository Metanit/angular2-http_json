import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './user';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
  
    user: User;
     
    constructor(private httpService: HttpService){}
     
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: Response) => this.user=data.json());
    }
}