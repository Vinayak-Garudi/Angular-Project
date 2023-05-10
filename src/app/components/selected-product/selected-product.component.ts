import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AllDataService } from 'src/app/all-data.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit, OnChanges {
  dummyId: any
  dummyForm: FormGroup
  allValues: any
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private alldata: AllDataService) {
    this.dummyForm = fb.group({
      title: ['Prefilled Title', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.required]],
      desc2: ['', [Validators.required]]
    })

    this.allValues = this.alldata.getAllData()
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dummyId = params.get('dummyId')
    })
    if (this.allValues) {
      console.log("alldata", this.allValues.username)

    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("alldata", this.allValues.username)
  }

  submitDumyForm(res: any) {
    // if (res.controls.title.value.length > 0 && res.controls.desc.value.length > 0) {
    console.log(res.title)
    // }
    // else {
    // console.log("no title")
    // }
  }

  setAll() {
    this.dummyForm.setValue({
      'title': "Dummy Title",
      "desc": "Dummy Description",
      "desc2": "Dummy Description 2"
    })
  }

  setFew() {
    this.dummyForm.patchValue({
      'desc': "only desc dummy"
    })
  }

  postData() {
    console.log(this.dummyForm.get('title')?.value)
  }

  resetForm() {
    this.dummyForm.reset()
  }
}
