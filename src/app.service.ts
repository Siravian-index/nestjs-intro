import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPong(points: string): string {
    return `pong! +${points}`;
  }
}
