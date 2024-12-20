export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

const severityEnumReverse = {
  LOW: LogSeverityLevel.low,
  MEDIUM: LogSeverityLevel.medium,
  HIGH: LogSeverityLevel.high,
  low: LogSeverityLevel.low,
  medium: LogSeverityLevel.medium,
  high: LogSeverityLevel.high,
};

export interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogSeverityLevel; //Enum
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;
    this.message = message;
    this.level = level;
    this.createdAt = createdAt;
    this.origin = origin;
  }

  static fromJson = (json: string): LogEntity => {
    json = json === "" ? "{}" : json;
    const { message, level, createdAt, origin } = JSON.parse(json);

    const log = new LogEntity({
      message: message,
      level: level,
      createdAt: new Date(createdAt),
      origin: origin,
    });

    return log;
  };

  static fromObject = (object: { [key: string]: any }): LogEntity => {
    const { message, level, createdAt, origin } = object;

    // Normalize `level` to uppercase
    const normalizedLevel =
      typeof level === "string" ? level.toUpperCase() : level;

    if (!Object.keys(severityEnumReverse).includes(normalizedLevel)) {
      throw new Error(`Invalid severity level: ${level}`);
    }

    const log = new LogEntity({
      message,
      level:
        severityEnumReverse[
          normalizedLevel as keyof typeof severityEnumReverse
        ],
      createdAt,
      origin,
    });

    console.log(log);

    return log;
  };
}
