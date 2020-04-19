import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageUpload';
  //storage for file attributes
  selectedFile : File

  //storage for feedback from backend server call
  message : string; 

  //storage for input name on retrieval process
  imageName : any;

  //storage for the actual data on retrival process
  retrievedImage : any;
  base64Data : any;
  retrieveResponse : any;


  // invoking HttpClient
  constructor(private http : HttpClient){}

  //Gets called when the user selects an image
  public onFileChanged(event){
    //select file
    this.selectedFile = event.target.files[0];
  }

  
  //Gets called when the user clicks on submit to upload the image
  public onUpload(){
    console.log(this.selectedFile);

    //create blank FormData() for storage 
    const uploadImageData = new FormData();
    // append(name, blob, fileName) – add a field as if it were <input type="file">
    uploadImageData.append("imageFile",this.selectedFile,this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.http.post("http://localhost:8080/image/upload",uploadImageData,{observe : "response"})
      .subscribe((response)=>{
        if (response.status===200) {
          this.message = "Image uploaded successfully";
        } else {
          this.message = "Image not uploaded successfully";
        }
      })
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  public getImage(){
     //Make a call to Sprinf Boot to get the Image Bytes.
     this.http.get("http://localhost:8080/image/get/"+this.imageName)
      .subscribe((res) => {
        this.retrieveResponse = res;
        //.picByte pertains to the picByte of ImageModel which is of type byte[]
        this.base64Data = this.retrieveResponse.picByte;
        this.retrievedImage = "data:image/jpeg;base64," +this.base64Data;
      })
  }



}
