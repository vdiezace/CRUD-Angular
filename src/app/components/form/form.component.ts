import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myUser!: User | any;
  userForm: FormGroup;

  formTitle: string = "NEW USER";
  buttonName: string = "Create";
  imageUsr: string = "";
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,9}$/)]),
      image: new FormControl("", [Validators.required])
    }, []);
  }

  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: string = params.userId;
      this.formTitle = "UPDATE USER";
      this.buttonName = "Update";
      if (id) {
        const response = await this.usersService.getUserById(id);
        this.myUser = response;
        this.userForm = new FormGroup({
          first_name: new FormControl(this.myUser?.first_name, [Validators.required, Validators.minLength(3)]),
          last_name: new FormControl(this.myUser?.last_name, [Validators.required, Validators.minLength(4)]),
          email: new FormControl(this.myUser?.email, [Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,9}$/)]),
          image: new FormControl(this.myUser?.image, [Validators.required])
        }, []);
      }
    });
    */

  }

  async getDataForm(): Promise<void> {
    //console.log(this.userForm)  
    try {
      let newUser: User = this.userForm.value;
      let response = await this.usersService.createUSer(newUser);
      console.log(response);
      if (response.id) {
        Swal.fire({
          icon: 'success',
          title: `El usuario ${response.first_name} ${response.last_name} se ha creado correctamente`
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ops! Parece que ha habido un error',
          text: "Inténtelo de nuevo"
        });
      }
    } catch (error) {
      console.log(error)
    }
  }


  checkControl(pControlName: string, pError: string): boolean {
    if (this.userForm.get(pControlName)?.hasError(pError) && this.userForm.get(pControlName)?.touched) {
      return true
    }
    return false;
  }
}
