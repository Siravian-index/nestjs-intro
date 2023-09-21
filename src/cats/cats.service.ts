import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    const cat = { ...createCatDto, id: uuidv4() };
    this.cats.push(cat);
    return {
      data: cat,
    };
  }

  findAll() {
    return {
      data: this.cats,
    };
  }

  findByUUID(uuid: string) {
    const found = this.cats.find((cat) => cat.id === uuid);
    if (!found) {
      throw new Error(`${uuid} not found`);
    }
    return {
      data: found,
    };
  }

  findAllByBreed(breed: string) {
    const collection = this.cats.filter(
      (cat) => cat.breed.toLowerCase() === breed.toLowerCase(),
    );
    if (!collection.length) {
      throw new Error(`${breed} not found`);
    }
    return {
      data: collection,
    };
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    this.cats = this.cats.map((cat) =>
      cat.id === id ? { ...cat, ...updateCatDto } : cat,
    );
    return {
      data: this.cats,
    };
  }

  remove(id: string) {
    this.cats = this.cats.filter((cat) => cat.id !== id);
    return {
      data: this.cats,
    };
  }
}
