import { Module } from '@nestjs/common';
import { RenderController } from './render.controller';
import { ShopInfoModule } from '../shop-info/shop-info.module';
import { HttpModule } from '@nestjs/axios';
import { RenderService } from './render.service';

@Module({
  imports: [ShopInfoModule, HttpModule],
  controllers: [RenderController],
  providers: [RenderService]
})
export class RenderModule {}
