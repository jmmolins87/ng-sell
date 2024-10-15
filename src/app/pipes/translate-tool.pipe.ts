import { Pipe, PipeTransform } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateTool'
})
export class TranslateToolPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(tool: any): any {
    const translatedTool = { ...tool };
    translatedTool.TITLE = this.translate.instant(tool.TITLE);
    translatedTool.SUBTITLE = this.translate.instant(tool.SUBTITLE);
    translatedTool.DESCRIPTION = this.translate.instant(tool.DESCRIPTION);
    translatedTool.TAGS = tool.TAGS.map((tag: string) => this.translate.instant(tag));
    translatedTool.WEB = this.translate.instant(tool.WEB);
    return translatedTool;
  }
}