import { Injectable, NotFoundException } from '@nestjs/common';
import { PositionDto } from './dto/create-position.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService){}
  
  async create(data: PositionDto) : Promise<PositionDto> {
    return await this.prisma.position.create({data});
  }

  async findAll() : Promise<PositionDto[]> {
    return await this.prisma.position.findMany();
  }

   async findOne(id: number) {
      const data = await this.prisma.position.findUnique({where:{id}});
      
      if(!data) throw new NotFoundException('wrong id data');
      
      return data
    
  }

  async update(id: number, data: PositionDto):Promise<PositionDto> {
    try {
      return await this.prisma.position.update( {where: {id}, data} ) ;
    } catch (error) {
        throw new NotFoundException(`wrong ${id} data error: ${error}`);
    }
  }

  async remove(id: number):Promise<PositionDto> {
    return await this.prisma.position.delete({where:{id}});
  }
}
