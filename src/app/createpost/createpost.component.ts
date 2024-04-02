import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {

  postform:FormGroup={}as FormGroup;
  updateBtnFlage:boolean=true;
  constructor(private fb:FormBuilder,private postserv:PostserviceService) {}


  ngOnInit()
  {
    this.postform=this.fb.group({
        title:["",[Validators.required]],
        body:["",[Validators.required]]
    });

    // this.postform = this.fb.group({
    //   title: ['', [Validators.required]],
    //   body: ['', [Validators.required]],
  }

  submitfun(){

    let id=Math.floor(Math.random()*10);

     console.log(this.postform.value)
    //const [title,body]=[...this.postform.value]
    let obj={
      id:id,
      ...this.postform.value
    }
      this.postform.reset();
    this.postserv.createPost("allposts",obj).subscribe({
      next:(res)=>{
         console.log(res);
      }   
    });
  }

}
