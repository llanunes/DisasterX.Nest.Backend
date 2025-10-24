import { Module } from '@nestjs/common';
import { DisasterAlertsService } from './disaster-alerts.service';
import { DisasterAlertsResolver } from './disaster-alerts.resolver';

@Module({
  providers: [DisasterAlertsService, DisasterAlertsResolver],
  exports: [DisasterAlertsService],
})
export class DisasterAlertsModule {}
