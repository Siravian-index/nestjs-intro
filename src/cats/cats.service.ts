import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CatsService {
  private cats: Record<string, Cat[]> = {}

  create(createCatDto: CreateCatDto) {
    const hasCollection = this.cats.hasOwnProperty(createCatDto.breed)
    if (!hasCollection) {
      this.cats[createCatDto.breed] = []
    }
    const cat = {...createCatDto, id: uuidv4()}
    this.cats[createCatDto.breed].push(cat)
    return {
      message: `Cat ${createCatDto.name} added to ${createCatDto.breed} collection`,
      data: cat
    };
  }

  findAll() {
    return this.cats
  }

  findByBreed(breed: string) {
    const collection = this.cats.hasOwnProperty(breed)
    if (!collection) {
      throw new Error(`${breed} not found`);
    }
    return this.cats[breed]
  }


  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
