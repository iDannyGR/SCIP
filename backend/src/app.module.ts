import { Module } from '@nestjs/common';
import { AreaModule } from './area/area.module';
import { OrganizationModule } from './organization/organization.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [AreaModule, OrganizationModule, PositionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
