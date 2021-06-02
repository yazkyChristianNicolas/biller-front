import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SideMenuOption } from '../models/side-menu-option';
import { ToolbarTitleService } from '../providers/toolbar-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ToolbarTitleService]

})
export class HomeComponent implements OnInit {
  sections: SideMenuOption[] = [ { name: 'Presupuestos' , route: "/presupuestos"} , { name:'Servicios', route: "/servicios"}];
  section:string;
  sideNavMode:string;

  constructor(private route: ActivatedRoute,private router: Router, private toolbarTitleService: ToolbarTitleService) { 
    this.toolbarTitleService.title$.subscribe( newTitle => {
      this.setTitle(newTitle);
    });
  }

  ngOnInit(): void {
    this.setTitle(this.sections[0].name);
    this.sideNavMode = "side"; //over
  }


  selectMenuOption(optionSelected: SideMenuOption) {
    this.setTitle(optionSelected.name);
    this.router.navigate([optionSelected.route]);
  }

  setTitle(title:string) {  
    this.section = title;
  }


}
