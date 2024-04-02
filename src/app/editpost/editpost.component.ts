import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from '../model/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent {

  
  postform:FormGroup={}as FormGroup;
  updateBtnFlage:boolean=true;
  Allpost:IPost[]=[];
  constructor(private fb:FormBuilder,private postserv:PostserviceService,private route:ActivatedRoute) {}
  

  ngOnInit()
  {
    this.postform=this.fb.group({
        title:["",[Validators.required]],
        body:["",[Validators.required]]
    });
    
    this.route.params.subscribe((param:Params)=>{
    let id=+param['id'];
    localStorage.setItem("pid",""+id);
    this.postserv.getonepost(id,"allposts").subscribe({
      next:(res)=>{
        this.postform.patchValue({
           title:res.title,
           body:res.body
        });

      }
    });
  });

  this.postserv.fetchAllpost("allposts").subscribe({
    next:(res)=>{
      this.Allpost=res;
    }
  });
     
}


onUpdatePost()
{
    let id=+(localStorage.getItem("pid"))!;
    // let obj={
    //     id:id,
    //     ...this.postform.value
    // }

    this.postserv.updatepost(id,"allposts",this.postform.value).subscribe({
      next:(resp)=>{
             console.log(resp);
        this.Allpost.forEach(ele=>{
            if(id===ele.id)
            {
                ele.id=resp.id;
                ele.title=resp.title;
                ele.body=resp.body;
            }
        })
     }
    })

}

/*onUpdatePost()
  { 
    let getId=+(localStorage.getItem('postId'))!;
    this.postser.updatePost(getId,"posts",this.postform.value).subscribe({
      next:(res)=>{
          
        this.Allpost.forEach((ele) => {
           if (ele.Id === getId) {
               ele.title=res.title,
               ele.body=res.body   
          }
        });
        this.updateBtnFlage=true;
        this.postform.reset(); 

      }
    }) 
  }*/

submitfun()
{
}




}