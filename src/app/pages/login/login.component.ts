import { Component,OnInit,OnChanges } from '@angular/core';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit,OnChanges{
    private pageStatus: String ;
    newsInfo: Array<String> = ["haha","heihei"];
    isLoginPage: Boolean ;
    usernameVal: String;
    pwdVal: String;
    pageDes = {
      "welcomelab" : "" ,
      "commit_btn" : "" ,
      "step_btn" : "" 
    }

    loginPageDes = {
      "welcomelab" : "Login to Fusion" ,
      "commit_btn" : "Login" ,
      "step_btn" : "Login for Fusion" 
    }

    registerPageDes = {
      "welcomelab" : "Register to Fusion",
      "commit_btn" : "Register",
      "step_btn" : "Register for Fusion"
    }
    constructor(private userService: HttpService,){}
    ngOnInit(){
       this.isLoginPage = true;
       this.pageDes = this.isLoginPage ? this.registerPageDes: this.loginPageDes
    }
    
    ngOnChanges(){
      console.log("changed")
    }

    goNext(){
      this.isLoginPage = !this.isLoginPage;
      // this.newsInfo.push("hehe")
      // this.pageDes.welcomelab="change"
      console.log("go next")
      this.pageDes = this.isLoginPage ? this.registerPageDes: this.loginPageDes
    }

    submit(){
      console.log(`username:${this.usernameVal},password:${this.pwdVal}`)
      let data = {"username": this.usernameVal,"password": this.pwdVal}
      this.userService.loginRequest(data).subscribe(res=>{this.userInfoPro(res)},error=>{this.registerErrHanlde(error)})
    }

    userInfoPro(res){
      console.log(res)
      let response = res.json()
      console.log(response)
      if(response.code===200){
        console.log("register success")
      }else{
        console.log(response.msg)
      }
    }
    registerErrHanlde(err){
      console.log(err)
    }
}