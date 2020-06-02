import { LoggerService } from '@nestjs/common';
import { DateTime } from 'luxon';
import { Logger, createLogger, transports, format } from 'winston';
import {Config} from './config/configuration';


const { combine, printf, label } = format;

const logFormat = printf(({ level, message, label }) => {
  return `${DateTime.local().toString()} [${label}] ${level.toUpperCase()}: ${message}`;
});

export class AppLogger implements LoggerService {
  private logger: Logger;
  constructor(appLabel?: string) {
    this.logger = createLogger({
      level: Config().logger.level,
      format: combine(label({ label: appLabel }), logFormat),
      transports: [new transports.Console(), new transports.File({ filename: 'combined.log' })],
    });
  }
  log(message: string, context?: string) {
    this.logger.log(message, context);
  }
  error(message: string, trace?: string, context?: string) {
    this.logger.error(message, trace, context);
  }
  warn(message: string, context?: string) {
    this.logger.warn(message, context);
  }
  debug?(message: string, context?: string) {
    this.logger.debug(message, context);
  }
  verbose?(message: string, context?: string) {
    this.logger.verbose(message, context);
  }
}
