import { Module } from '@nestjs/common';
import { AreaModule } from './area/area.module';
import { OrganizationModule } from './organization/organization.module';
import { PositionModule } from './position/position.module';
import { EmployeeResolver } from './employee/employee.resolver';
import { EmployeeModule } from './employee/employee.module';
import { LicenceModule } from './licence/licence.module';
import { AuthModule } from './auth/auth.module';
import { LicenceModule } from './licence/licence.module';

@Module({
  imports: [AreaModule, OrganizationModule, PositionModule, EmployeeModule, LicenceModule, AuthModule],
  controllers: [],
  providers: [EmployeeResolver],
})
export class AppModule {}
