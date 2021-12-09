import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class ShopInfoService {
  constructor(private httpService: HttpService) {}

  async getEntryMode(): Promise<any> {
    try {
      return await lastValueFrom(this.httpService.get(`${process.env.LB_PF_TRAININGAPI_IN}corp/entry_mode?app_id=appm2g17bv03370`))
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to getEntryMode',
      );
      throw err;
    }
  }

}
