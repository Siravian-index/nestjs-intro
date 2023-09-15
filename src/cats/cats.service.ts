import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private id = 1
  private cats: Cat[] = []
  create(createCatDto: CreateCatDto): string {
    this.cats.push({ ...createCatDto, id: this.id })
    this.id++
    return `Cat ${createCatDto.name} added to ${createCatDto.breed} collection`;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    const found = this.cats.find((cat) => cat.id === id)
    return found ?? {}
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
