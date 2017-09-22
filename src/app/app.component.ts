import { Component } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { ToDoService } from './service/service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private service: ToDoService) { }
  data: any;
  result: any;
  updated: any;
  backUp: any;
  ngOnInit() {
    this.getDetails();

  }

  getDetails() {
    this.data = this.service.getList();
    this.data.subscribe((success: any) => {
      this.result = success;
      this.backUp = Object.assign({}, success);;
    }, (err: any) => {
      console.log(err);
    });
  }


  updateAll() {
    for (var i = 0; i < Object.keys(this.backUp).length; i++) {
      this.service.updateList(this.backUp[i]._id, this.result[i].name)
        .subscribe((success: any) => {
          this.updated = true;
        }, (err: any) => {
          this.updated = false;
        });

    }
  }
}
