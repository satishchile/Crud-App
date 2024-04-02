import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { IPost } from '../model/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Allpost:IPost[]=[];
  errormsg:string='';
  constructor(private postserv:PostserviceService)
  {}


  ngOnInit()
  {
     this.getAllPost();
  }


  getAllPost()
  {
    this.postserv.fetchAllpost("allposts").subscribe({
      next:(response)=>{
             this.Allpost=response;
      },

      error:(error)=>{
        console.log(error);

         this.errormsg=error.message;
      }
  
    });
  }

  ondeletepost(id:number){
    console.log("delete called");
    this.postserv.getonepost(id,"allposts").subscribe({
      next:(resp)=>{
        console.log(resp);
        const newarr:IPost[]=this.Allpost.filter(ele=>ele.id !=resp.id);  
        this.Allpost=newarr;
      }
    });
  
  }

}


/*

onPostDelete(id:number){
  
  this.postser.onDeletePost(id,"delete").subscribe({
    next:(resp)=>{
      this.Allpost=this.Allpost.filter(ele=>ele.Id !==id)
    }
  })


}


  onEditPost(id:number){
    this.postser.getSinglePost(id,"post").subscribe({
      next:(res)=>{
        this.updateBtnFlage=false;  
        localStorage.setItem("postId",""+id);
           this.postform.setValue({
               title:res.title,
               body:res.body
           })

      }
    })
   
  }

  onUpdatePost()
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
  }




*/

