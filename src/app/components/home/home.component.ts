import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  myUser: User[] = []; 
  constructor(private usersService: UsersService){}

  ngOnInit(): void{
    this.usersService.getAllUsers().subscribe(data => {
      //console.log(data)
      this.myUser = data;
    })
  }
}
