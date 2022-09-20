import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unitTestEspe';
  showEmoji: boolean = false;

  subTitle = 'Pruebas Unitarias Angular con Jasmine'
  contentEmoji = ''
  dataSession: any;

  form: FormGroup = new FormGroup({})
  isCheck: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      correo:  ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]]
    })
  }
  sendLogin(): void {
  this.isCheck = {user:1}

  }
}
