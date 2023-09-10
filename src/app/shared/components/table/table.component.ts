import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableArrayService } from '../../services/table-array.service';
import { CustomRegex } from '../../const/validators/customRegex'
import { SnackbarService } from '../../services/snackbar.service';
import { Product } from "../../const/model/interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isUnchanged: boolean = true
  newForm!: FormGroup
  detailsArr!: Product[];
  addArray!: Array<Product>
  productId!: any


  constructor(private _arrayService: TableArrayService,
    private _snackBar: SnackbarService) { }


  // userArr : Array<any> = this._arrayService.userArray;

  ngOnInit(): void {


    //---------to fetch data from server
    this._arrayService.getAllDetails()
      .subscribe((res) => {
        this.detailsArr = res
        console.log(this.detailsArr);
      })

    //----------form--------------
    this.newForm = new FormGroup({
      id: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyNumber)]),
      product: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      category: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      fullPrice: new FormControl(null, [Validators.required]),
      SalePrice: new FormControl(null, [Validators.required]),
      avaibility: new FormControl(null, [Validators.required]),
      supplier: new FormControl(null, [Validators.required]),
      discount: new FormControl(null, [Validators.required]),
    })

  }


  //--------submit form---------
  onSubmitForm(form: FormGroup) {
    let newObj = {
      id: form.value.id,
      product: form.value.product,
      category: form.value.category,
      fullPrice: form.value.fullPrice,
      SalePrice: form.value.SalePrice,
      avaibility: form.value.avaibility,
      supplier: form.value.supplier,
      discount: form.value.discount + '%',
      IsaddProduct: false,
      isEdit: false
    }
    if (form.valid) {
      console.log(form.value);
      this._arrayService.postDetails(newObj)
        .subscribe(resp => {
          console.log(resp);
        })
    }
  }

  //-------------add button-----------
  onAddProduct() {
    this.detailsArr.unshift(
      {
        id: 0,
        product: '',
        category: '',
        fullPrice: 0,
        SalePrice: 0,
        avaibility: true,
        supplier: '',
        discount: '',
        IsaddProduct: true,
        isEdit: true
      }
    )
  }

  //--------edit---------
  OnEdit(obj: Product) {
    // only one element can be edited at one time
    this.detailsArr.forEach((element: any) => {
      element.isEdit = false;
    });
    obj.isEdit = true;
  }
  // OnAdd(obj : any){
  //   this._arrayService.postDetails(obj)
  //   .subscribe(resp=>{
  //     console.log(resp);  
  //     resp.IsaddProduct =false
  //     resp.isEdit = false
  //   })

  //   obj.IsaddProduct = false;
  //   obj.isEdit = false

  // }


  //--------edit and save----------
  OnUpdate(obj: Product, id: any) {
    // console.log(obj);
    let newObj = {
      id: obj.id,
      product: obj.product,
      category: obj.category,
      fullPrice: obj.fullPrice,
      SalePrice: obj.SalePrice,
      avaibility: obj.avaibility,
      supplier: obj.supplier,
      discount: obj.discount + '%',
      IsaddProduct: false,
      isEdit: false
    }

    obj.isEdit = false
    newObj.isEdit = false
    //functionality when we add new product
    if (obj.IsaddProduct == true) {
      obj.isEdit = false
      obj.IsaddProduct = false
      newObj.isEdit = false;
      newObj.IsaddProduct = false
      if(this.newForm.valid){
        this._arrayService.postDetails(newObj)
          .subscribe(resp => {
            console.log({ ...resp });
            this._snackBar.openSnackBar('Your details are submitted successfully', "close")
          })
      }
      //if form is not valid or fields are empty before submitting form
      if (!this.newForm.valid) {
        this._snackBar.openSnackBar('Please enter required information before submit', "close")
      }
    } else {
        if(this.newForm.valid){
          this._arrayService.updateDetails(id, obj)
          .subscribe(resp => {
            console.log(resp);
            this._snackBar.openSnackBar('Your details are updated successfully', "close")
          })
        }else{
          this._snackBar.openSnackBar('please add required and valid data', "close")
        }
      
    }
    // if(this.newForm.valid){
      // if(!obj.IsaddProduct == false) {
        // this._arrayService.postDetails(newObj)
        //   .subscribe(resp => {
        //     console.log({ ...resp });
        //     this._snackBar.openSnackBar('Your details are submitted successfully', "close")
        //   })
      // } else {
        // this._arrayService.updateDetails(id, obj)
        //   .subscribe(resp => {
        //     console.log(resp);
        //     this._snackBar.openSnackBar('Your details are updated successfully', "close")
        //   })
      // }
    // }
  }


  //------------delete------------
  onDelete(obj: Product) {
    // console.log(obj);
    console.log(obj.id);
    this._arrayService.deleteDetails(obj.id)
      .subscribe(() => {
        this.detailsArr.filter((item: any) => { item.id !== obj.id })
        // console.log(this.productId);  
      })
    obj.isEdit = false
    this._snackBar.openSnackBar('Your details are deleted successfully', "close")
  }

  //----------to reverse array----------
  onArrowClick() {
    this.detailsArr.reverse()
  }


  // ---------to sort array on the basis of id------------
  onArrowSort() {
    this.detailsArr.sort((a: Product, b: Product) => {
      let x = a.id
      let y = b.id
      return x > y ? 1 : -1
    })
  }
}
