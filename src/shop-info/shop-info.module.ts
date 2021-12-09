import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ShopInfoService } from './shop-info.service';

@Module({
  imports: [HttpModule],
  providers: [ShopInfoService],
  exports: [ShopInfoService],
})
export class ShopInfoModule {}
