import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() myUser!: User | any;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    //console.log(this.myUser)
  }


  deleteUsr(pId: string | undefined): void {
    if (pId !== undefined) {
      Swal.fire({
        icon: 'question',
        title: `¿Está seguro de que desea eliminar al usuario ${this.myUser.first_name} ${this.myUser.last_name}?`,
        showDenyButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          let response = await this.usersService.deleteUser(pId);
          //console.log(response)
          Swal.fire({
            icon: 'success',
            title: `El usuario ${this.myUser.first_name} ${this.myUser.last_name} se ha eliminado correctamente`
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ops! Parece que ha habido un error',
            text: "La operación ha sido cancelada"
          });
        }
      });
    }
  }
}
