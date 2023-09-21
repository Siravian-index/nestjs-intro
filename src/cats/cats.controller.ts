import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get("/:id")
  findById(@Param("id") id: string) {
    try {
      return this.catsService.findByUUID(id)
    } catch (error) {
      throw new HttpException("Id Not Found", HttpStatus.NOT_FOUND)
    }
  }w

  @Get("/breed/:breed")
  findAllByBreed(@Param("breed") breed: string) {
    try {
      return this.catsService.findAllByBreed(breed);
    } catch (error) {
      throw new HttpException("Breed Not Found", HttpStatus.NOT_FOUND)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
