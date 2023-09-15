import { Controller, Get, Query } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller('ping')
export class PingController {
  constructor(private readonly pingService: PingService) { }

  @Get()
  pong(@Query() query: { points: number }) {
    return this.pingService.pong(query.points)
  }
}
