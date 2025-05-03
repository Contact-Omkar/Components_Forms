import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  user = new FormGroup(
    {
      username : new FormControl('',[Validators.required,Validators.minLength(3)]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)]),
      age : new FormControl('',[Validators.required,Validators.min(18),Validators.max(50)]),
      email : new FormControl('',[Validators.required, Validators.email])
    }
  )
  registeruser(){
    console.log(this.user.value);

  }
}
