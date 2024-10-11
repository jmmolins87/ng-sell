import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public toolsData!: any[];
  public titleType: titleTypes = titleTypes.h1;
  public title: string = "TITLE_TOOLS";

  constructor( private _toolsService: ToolsService, private _translate: TranslateService ) {
    // Set the default language
    this._translate.setDefaultLang('en');

    // Use browser language if available
    const browserLang = this._translate.getBrowserLang();
    this._translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'es');
  }

  ngOnInit(): void {
    this.tools;
  }

  // Function to dynamically change the title
  changeTitle(newTitleKey: string) {
    this.title = newTitleKey;
  }

  get tools() {
    this._toolsService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
    });
    return this.toolsData;
  }

}
