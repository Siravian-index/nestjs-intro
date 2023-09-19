import { Injectable, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = []
  create(createCatDto: CreateCatDto): string {
    this.cats.push(createCatDto)
    return `Cat ${createCatDto.name} added to ${createCatDto.breed} collection`;
  }

  findAll() {
    return this.cats;
  }

  findByName(name: string) {
    const found = this.cats.find((cat) => cat.name === name)
    if (!found) {
      throw new Error("Cat not found");
    }
    return found
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
