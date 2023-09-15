import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [CatsModule, PingModule],
})
export class AppModule {}
