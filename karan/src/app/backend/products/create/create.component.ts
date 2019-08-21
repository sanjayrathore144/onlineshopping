import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/backend/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;
  constructor(private fBuilder:FormBuilder, private rout:Router, private products:ProductService) { }

  ngOnInit() {
    this.productForm = this.fBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  
  saveProduct():void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.products.saveProduct(this.productForm.value).subscribe( data =>  {  console.log(data);  
        this.ngOnInit();    
      });
    } 
    else {
      // validate all form fields
      Object.keys(this.productForm.controls).forEach(field => {
        const control = this.productForm.get(field);          
        control.markAsTouched({ onlySelf: true });       
      });
    }
  }
}
