import {
  Controller,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Get,
} from '@nestjs/common';
import { CreateAreaDto, UpdateAreaDto } from './Dto';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get()
  async findAllArea() {
    return await this.areaService.findAll();
  }

  @Get(':id')
  async finOneArea(@Param('id') id: string) {
    return await this.areaService.findOne(+id);
  }

  @Post()
  async createArea(@Body() data: CreateAreaDto) {
    return await this.areaService.create(data);
  }

  @Delete(':id')
  async deleteArea(@Param('id') id: string) {
    return await this.areaService.remove(+id);
  }

  @Put(':id')
  async updateArea(@Param('id') id: string, @Body() data: UpdateAreaDto) {
    return await this.areaService.update(+id, data);
  }
}
