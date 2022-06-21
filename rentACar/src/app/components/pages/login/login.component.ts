import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  user:User

  constructor(private formBuilder:FormBuilder
    ,private router:Router,private messageService:MessageService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      this.user = Object.assign({},this.loginForm.value)
    }
    this.userService.login(this.user).subscribe(data=>{
      if(data.length>0){
        localStorage.setItem("token","fjnfjzds565gzfdg6")
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successfully'
        })
        this.router.navigate(['/carlist'])
      }
      else{
        this.messageService.add({
          severity: 'error',
          summary: 'Login information is incorrect',
          detail: 'Please check your information'
        })
      }
    })
  }
}
