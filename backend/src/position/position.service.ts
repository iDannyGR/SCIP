import { Injectable } from '@nestjs/common';
import { PositionDto } from './dto/create-position.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService){}
  
  async create(createPositionDto: PositionDto) {
    return await this.prisma.position.create(createPositionDto);
  }

  async findAll() {
    return await this.prisma.position.findMany();
  }

   async findOne(id: number) {
    return await this.prisma.position.findUnique(id);
  }

  update(id: number, updatePositionDto: PositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
