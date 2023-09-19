import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = []
  create(createCatDto: CreateCatDto): string {
    return `Cat ${createCatDto.name} added to ${createCatDto.breed} collection`;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return {}
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
