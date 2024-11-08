import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionDto } from './dto/create-position.dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() data: PositionDto) {
    return this.positionService.create(data);
  }

  @Get()
  async findAll() {
    return await this.positionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.positionService.findOne(+id);
    
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePositionDto: PositionDto,
  ) {
    return await this.positionService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.positionService.remove(+id);
  }
}
