import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class LoggerMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: NextFunction): void;
    private apiLog;
}
