import { Controller , Post , UseInterceptors , UploadedFile } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) 
  async uploadCsv(@UploadedFile() file: Express.Multer.File): Promise<string> {
    if (!file) {
      return 'No file uploaded'; 
    }
    await this.employeeService.processCsv(file.buffer); 
    return 'CSV processed successfully!';
  }

  // @MessagePattern('createEmployee')
  // create(@Payload() createEmployeeDto: CreateEmployeeDto) {
  //   return this.employeeService.create(createEmployeeDto);
  // }

  @MessagePattern('findAllEmployee')
  findAll() {
    return this.employeeService.findAll();
  }

  @MessagePattern('findOneEmployee')
  findOne(@Payload() id: number) {
    return this.employeeService.findOne(id);
  }

  @MessagePattern('updateEmployee')
  update(@Payload() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(updateEmployeeDto.id, updateEmployeeDto);
  }

  @MessagePattern('removeEmployee')
  remove(@Payload() id: number) {
    return this.employeeService.remove(id);
  }
}
