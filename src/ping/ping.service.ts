import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {

    pong(points: number) {
        return `Pong! +${points}`
    }
}
