import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

import { FirstComponent } from './first/first.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const r: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'first', component: FirstComponent },
  { path: 'emploi', component: OffresEmploiComponentComponent },
  { path: 'article', component: ArticlesComponentComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'tdd', component: TemplateDrivenFormComponentComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(r)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
