import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { Service } from '../models/service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import {MatTableDataSource} from '@angular/material/table';
import { ToolbarTitleService } from '../providers/toolbar-title.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'detail', 'area', 'price', 'active'];
  services:MatTableDataSource<Service>;

  constructor(private apiService: ApiService, private toolbarTitleService: ToolbarTitleService) { 
  }

  ngOnInit(): void {
    this.toolbarTitleService.setTitle("Servicios");
    this.apiService.getAllServices()
    .pipe(catchError(error =>{
        console.log("Get All Services Error");
        console.log(error);
        return throwError(error);
    }))
    .subscribe(response => {
        console.log(response);
        this.services = new MatTableDataSource(response);
    });
  }

  applyFilter(event: Event) {
    //The filter does not work with area name attribute 
    const filterValue = (event.target as HTMLInputElement).value;
    this.services.filter = filterValue.trim().toLowerCase();
  }


}
