import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { SharedService } from '../../shared/services/shared.service';
import { PagesService } from '../../services/pages-service.service';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.scss']
})
export class ToolPageComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;
  // Get Tool
  public tool!: Tool;
  // Set the title of the page
  public titleType: titleTypes = titleTypes.h1;

  constructor( 
    private _sharedService: SharedService, 
    private _activatedRoute: ActivatedRoute,
    private _pagesService: PagesService,
    private _router: Router 
  ) {}

  ngOnInit() {
    this.darkMode();
    this.getToolById();
  }

  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // Tool by id
  getToolById(): void {
    this._activatedRoute.params.pipe(
      switchMap(({ id }) => this._pagesService.getToolById(id))
    ).subscribe(tool => {
      if (!tool) return this._router.navigate(['/404']);
      this.tool = tool;
      return;
    })
  }

  // Go back button
  goBack() {
    this._router.navigate(['/tools']); 
  }

}
