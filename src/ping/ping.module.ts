import { Global, Module } from '@nestjs/common';
import { PingService } from './ping.service';
import { PingController } from './ping.controller';

@Global()
@Module({
  controllers: [PingController],
  providers: [PingService],
  exports: [PingService]
})
export class PingModule {}
