import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma:PrismaService){}

  async create(data: CreateEmployeeDto):Promise<CreateEmployeeDto> {
    return await this.prisma.employee.create({ data }) ;
  }

  async findAll() {
    return await this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prisma.employee.findUnique({where: {id}})
    } catch (error) {
      new BadRequestException(`bad id provider n: ${id}`)
    }
  }

  async update(id: number, employeeData: UpdateEmployeeDto):Promise<UpdateEmployeeDto> {
    try {
        return await this.prisma.employee.update({
          where: {id},
          data: employeeData }
        )
    } catch (error) {
      new BadRequestException('no id or data found')
    }
  }

  async remove(id: number) {
    return await this.prisma.employee.delete({where: {id}});
  }
}
