import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { getTraceId, setTraceId } from 'src/services/tracing.service';

@Injectable()
export class TracingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    setTraceId(randomUUID());
    console.log(getTraceId());
    next();
  }
}
