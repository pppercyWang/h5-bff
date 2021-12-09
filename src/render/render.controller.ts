import { Controller, Get, Req } from '@nestjs/common';
import { ShopInfoService } from '../shop-info/shop-info.service';
import { RenderService } from './render.service';

import { UtilService } from '../util/util.service';
import { Request } from 'express';

@Controller()
export class RenderController {
    constructor(private readonly shopInfoService: ShopInfoService,
    private readonly renderService: RenderService, private readonly utilService: UtilService) {}

    @Get('training_page*')
    async trainingPage(@Req() req: Request) {
      const { data }  = await this.shopInfoService.getEntryMode()
      const template    = await this.renderService.getTrainingFeTemplate(req.hostname)
      let result = ''
      if(template && template.data){
        result = template.data
      }
      result = result.replace('{{__shop_type}}', data.data.entry_mode)
      result = result.replace('{{app_id}}',this.utilService.getAppIdFormHost(req.hostname))
      return result
    }
  }