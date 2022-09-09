import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyComponentComponent } from './my-component/my-component.component';



@NgModule({
  declarations: [
    MyLibComponent,
    MyComponentComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
