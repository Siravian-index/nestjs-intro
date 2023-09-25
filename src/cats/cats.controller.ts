import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { RolesGuard } from 'src/common/auth/roles.guard';
import { Roles } from 'src/common/auth/roles.decorator';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

@Controller('/cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor,)
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  @Roles(["admin"])
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('/:uuid')
  findById(@Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string) {
    try {
      return this.catsService.findByUUID(uuid);
    } catch (error) {
      throw new HttpException('Id Not Found', HttpStatus.NOT_FOUND);
    }
  }

  @Get('/breed/:breed')
  findAllByBreed(@Param('breed') breed: string) {
    try {
      return this.catsService.findAllByBreed(breed);
    } catch (error) {
      throw new HttpException('Breed Not Found', HttpStatus.NOT_FOUND);
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
