import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() myUser!: User;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    //console.log(this.myUser)
  }


  deleteUsr(pId: number | undefined) {
    //console.log(pId)
    if (pId !== undefined) {
      let response = this.usersService.deleteUser(pId);
      console.log(response)
      //alert("Esta borrando el user");
    } else {
      console.error();

    }
  }
}
