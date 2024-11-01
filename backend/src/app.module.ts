import { Module } from '@nestjs/common';
import { AreaModule } from './area/area.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [AreaModule, OrganizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
