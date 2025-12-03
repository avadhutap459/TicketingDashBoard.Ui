export interface User {
  UserId: number;
  FName: string;
  LName: string;
  Email: string;
  PasswordHash: string;
  ConfirmPasswordHash: string;
  Gender: string;
  IsSudLifeEmployee: boolean;
  DateOfBirth: Date;
  CreatedDate: Date;
  IsActive: boolean;
  CreatedByUserId: number | null;
  AccessToken: string;
  RefreshToken: string;
  RefreshTokenExpiryTime: Date;
}