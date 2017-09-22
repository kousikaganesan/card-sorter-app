import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ToDoService } from './service/service';
import { DOMAIN, DOMAIN_CONFIG } from './domain/domain.constant';
@NgModule({
  imports: [BrowserModule, DndModule.forRoot(), HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ToDoService, {
    provide: DOMAIN,
    useValue: DOMAIN_CONFIG
  }]
})
export class AppModule { }
