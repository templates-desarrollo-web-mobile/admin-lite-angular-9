import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AccessibilityComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports:[
    AccessibilityComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
