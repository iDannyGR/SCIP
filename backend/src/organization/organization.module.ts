import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  imports:[PrismaService]
})
export class OrganizationModule {}
