import { Controller, Post, Body } from '@nestjs/common';

@Controller('area')
export class AreaController {
    constructor(private readonly  areaService: AreaService) {}

 @Post()
  async create(@Body() createAreaDto: CreateAreaDto){
    
  }
}
