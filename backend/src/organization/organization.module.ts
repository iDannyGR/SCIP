import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  imports: [PrismaModule],
})
export class OrganizationModule {}
