import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from './layout/layout.component';

const components = [LayoutComponent];

const modules = [CommonModule, MatToolbarModule];

@NgModule({
  declarations: [...components, LayoutComponent],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
