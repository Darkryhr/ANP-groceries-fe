import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutComponent } from './layout/layout.component';

const components = [LayoutComponent];

const modules = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  FormsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
];

@NgModule({
  declarations: [...components, LayoutComponent],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
