import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from './render/render.module';
import { ConfigModule } from '@nestjs/config';
import { ShopInfoModule } from './shop-info/shop-info.module';
import { UtilModule } from './util/util.module';

@Module({
  imports: [ConfigModule.forRoot(),RenderModule, ShopInfoModule, UtilModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
