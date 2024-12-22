import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HrService } from './hr.service';
import { CreateHrDto } from './dto/create-hr.dto';
import { UpdateHrDto } from './dto/update-hr.dto';

@Controller()
export class HrController {
  constructor(private readonly hrService: HrService) {}

  @MessagePattern('createHr')
  create(@Payload() createHrDto: CreateHrDto) {
    return this.hrService.create(createHrDto);
  }

  @MessagePattern('findAllHr')
  findAll() {
    return this.hrService.findAll();
  }

  @MessagePattern('findOneHr')
  findOne(@Payload() id: number) {
    return this.hrService.findOne(id);
  }

  @MessagePattern('updateHr')
  update(@Payload() updateHrDto: UpdateHrDto) {
    return this.hrService.update(updateHrDto.id, updateHrDto);
  }

  @MessagePattern('removeHr')
  remove(@Payload() id: number) {
    return this.hrService.remove(id);
  }
}
