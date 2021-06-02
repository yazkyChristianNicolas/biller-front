import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ToolbarTitleService {

 private titleSource = new Subject<string>();

 title$ = this.titleSource.asObservable();

 setTitle(title: string) {
   this.titleSource.next(title);
 } 

}
