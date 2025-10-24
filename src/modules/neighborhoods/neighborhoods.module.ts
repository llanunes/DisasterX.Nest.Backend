import { Module } from '@nestjs/common';
import { NeighborhoodsService } from './neighborhoods.service';
import { NeighborhoodsResolver } from './neighborhoods.resolver';

@Module({
  providers: [NeighborhoodsService, NeighborhoodsResolver],
  exports: [NeighborhoodsService],
})
export class NeighborhoodsModule {}
