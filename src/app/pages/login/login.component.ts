import { Component,OnInit,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnChanges{
    private pageStatus: String ;
    newsInfo: Array<String> = ["haha","heihei"];
    @Input() isLoginPage: Boolean ;
    pageDes = {
      "welcomelab" : (this.isLoginPage ? "Login to Fusion" : "Register to Fusion"),
      "commit_btn" : (this.isLoginPage ? "Login" : "Register"),
      "step_btn" : (this.isLoginPage ? "Login for Fusion" : "Register for Fusion")
    }
    constructor(){}
    ngOnInit(){
       this.isLoginPage = true;
    }
    
    ngOnChanges(){
      console.log("changed")
    }

    goNext(){
      // this.isLoginPage = !this.isLoginPage;
      this.newsInfo.push("hehe")

    }
}