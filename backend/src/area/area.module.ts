import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports: [PrismaModule]
})
export class AreaModule {}
