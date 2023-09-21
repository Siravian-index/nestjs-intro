import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CatsService {
  private cats: Cat[] = []

  create(createCatDto: CreateCatDto) {
    const cat = { ...createCatDto, id: uuidv4() }
    this.cats.push(cat)
    return {
      data: cat
    };
  }

  findAll() {
    return {
      data: this.cats
    }
  }

  findByUUID(uuid: string) {
    const found = this.cats.find((cat) => cat.id === uuid)
    if (!found) {
      throw new Error(`${uuid} not found`);
    }
    return {
      data: found
    }
  }

  findByBreed(breed: string) {
    const collection = this.cats.filter((cat) => cat.breed.toLowerCase() === breed.toLowerCase())
    if (!collection.length) {
      throw new Error(`${breed} not found`);
    }
    return {
      data: collection
    }


  }


  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
