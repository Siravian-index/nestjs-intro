import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/ping')
  getPong(@Query("points") points: string): string {
    return this.appService.getPong(points);
  }
}
