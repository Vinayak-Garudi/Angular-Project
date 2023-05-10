import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DummyApiComponent } from './components/dummy-api/dummy-api.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "dummyApi", component: DummyApiComponent },
  { path: "dummyApi/:dummyId", component: SelectedProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
