import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPong(points: string): string {
    return `pong! +${points}`;
  }
}
