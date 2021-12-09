import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RenderService {
  constructor(private httpService: HttpService) {}

    async getTrainingFeTemplate(appId: string): Promise<any> {
        try {
          return await lastValueFrom(this.httpService.get(`${process.env.LB_PF_TRAININGH5FE_IN}/index.html?app_id=${appId}`))
        } catch (err) {
          console.log(
            'ERROR: An error occurred while trying to getEntryMode',
          );
          throw err;
        }
      }
}
