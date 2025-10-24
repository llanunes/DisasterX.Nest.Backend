import { Module } from '@nestjs/common';
import { DisasterCategoriesService } from './disaster-category.service';
import { DisasterCategoriesResolver } from './disaster-category.resolver';

@Module({
  providers: [DisasterCategoriesService, DisasterCategoriesResolver],
  exports: [DisasterCategoriesService],
})
export class DisasterCategoriesModule {}
