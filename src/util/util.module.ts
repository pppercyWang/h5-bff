import { Module, Global } from '@nestjs/common';
import { UtilService } from './util.service';



@Global()
@Module({
  providers: [UtilService],
  exports: [UtilService]
})
export class UtilModule {}
