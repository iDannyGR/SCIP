import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto, UpdateOrganizationDto } from './Dto';

@Controller('organization')
export class OrganizationController {
    constructor(private readonly oganizationService:OrganizationService){}

@Get()
async findOrganizacion(){
    return await this.oganizationService.getOrganization();
}

@Post()
async createOrganizatoin(@Body() data:CreateOrganizationDto ){
    await this.oganizationService.createOrganization(data);
}

@Delete(":id")
async deleteOrganization(@Param('id') id:string){
    await this.oganizationService.deleteOrganization(+id);
}

@Put(':id')
async updateOrganization(@Param('id') id:string,@Body() data:UpdateOrganizationDto){
    await this.oganizationService.updateOrganization(+id, data)
}

}
