import { Controller, Post, Body } from '@nestjs/common';
import { CreateAreaDto } from './Dto';
import { AreaService } from "./area.service";

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  async getOrganization() {
    return await this.organizationService.getOrganization();
  }

  @Post()
  async createOrganization(@Body() data: CreateOrganizationDto) {
    return await this.organizationService.createOrganization(data);
  }

  @Delete(':id')
  async deleteOrganization(@Param('id') id: string) {
    return await this.organizationService.deleteOrganization(Number(id));
  }

  @Put(':id')
  async updateOrganization(
    @Param('id') id: string,
    @Body() data: UpdateOrganization,
  ) {
    return await this.organizationService.updateOrganization(Number(id), data);
  }
}
