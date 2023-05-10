import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent implements OnInit, OnChanges {
  apiData: any = {}
  randomValue: any = ""
  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products')
      .subscribe((data) => {
        console.log("data", data)
        this.apiData = data
        console.log("apiData", this.apiData.products[0].title)
      })
  }

  valuee(e: String) {
    console.log("eee", e)
    this.randomValue = e
    this.cdRef.detectChanges()
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
