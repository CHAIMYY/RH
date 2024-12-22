import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import * as csvParser from 'csv-parser';
import { Readable } from 'stream';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

  async processCsv(buffer: Buffer): Promise<void> {
    const results = [];

    const stream = Readable.from(buffer);

    await new Promise<void>((resolve, reject) => {
      stream
        .pipe(csvParser()) 
        .on('data', (data) => results.push(data)) 
        .on('end', () => {
          console.log('Parsed CSV Data:', results);
          resolve();
        })
        .on('error', (error) => reject(error)); 
    });
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
