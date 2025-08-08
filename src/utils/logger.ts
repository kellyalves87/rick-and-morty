export type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private readonly maxLogs = 100;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private addLog(level: LogLevel, message: string, context?: Record<string, unknown>) {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
    };

    this.logs.unshift(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.pop();
    }

    // Em produção, você pode enviar os logs para um serviço de monitoramento
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoringService(logEntry);
    }

    // Em desenvolvimento, mostra no console
    if (process.env.NODE_ENV === 'development') {
      const consoleMethod = {
        info: console.info,
        warn: console.warn,
        error: console.error,
      }[level];

      consoleMethod(`[${level.toUpperCase()}] ${message}`, context || '');
    }
  }

  private sendToMonitoringService(logEntry: LogEntry) {
    // Aqui você pode integrar com serviços como Sentry, LogRocket, etc.
    // Por exemplo:
    // Sentry.captureMessage(logEntry.message, {
    //   level: logEntry.level,
    //   extra: logEntry.context,
    // });
  }

  info(message: string, context?: Record<string, unknown>) {
    this.addLog('info', message, context);
  }

  warn(message: string, context?: Record<string, unknown>) {
    this.addLog('warn', message, context);
  }

  error(message: string, context?: Record<string, unknown>) {
    this.addLog('error', message, context);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }
}

export const logger = Logger.getInstance();
