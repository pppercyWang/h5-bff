import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
    getAppIdFormHost(host): string {
        try{
          return host.split('//')[1].split('.')[0];
        }catch(e){
            return ''
        }
      }
}
