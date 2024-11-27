import { LogEntity } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { SendEmailLogs } from "./send-email-logs";

describe("SendEmailLogs Use Case", () => {
  const mockLogRepository: LogRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const mockEmailService = {
    sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true),
  };

  const sendEmailLogs = new SendEmailLogs(
    mockEmailService as any,
    mockLogRepository
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call sendEmail and saveLog", async () => {
    const result = await sendEmailLogs.execute(
      "sistemabasesdedatos1@gmail.com"
    );

    expect(result).toBeTruthy();
    expect(mockEmailService.sendEmailWithFileSystemLogs).toBeCalledTimes(1);
    expect(mockLogRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockLogRepository.saveLog).toBeCalledWith({
      createdAt: expect.any(Date),
      level: "low",
      message: "Log email sent",
      origin: "send-email-logs.ts",
    });
  });

  test("should log in case of error", async () => {
    mockEmailService.sendEmailWithFileSystemLogs.mockResolvedValue(false);

    const result = await sendEmailLogs.execute(
      "sistemabasesdedatos1@gmail.com"
    );

    expect(result).toBeFalsy();
    expect(mockEmailService.sendEmailWithFileSystemLogs).toBeCalledTimes(1);
    expect(mockLogRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockLogRepository.saveLog).toBeCalledWith({
      createdAt: expect.any(Date),
      level: "high",
      message: "Error: Email log was not sent",
      origin: "send-email-logs.ts",
    });
  });
});
