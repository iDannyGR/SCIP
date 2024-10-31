import { Module } from '@nestjs/common';
import { AreaModule } from './area/area.module';

@Module({
  imports: [AreaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
