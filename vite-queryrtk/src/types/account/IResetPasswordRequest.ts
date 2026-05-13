//Для встановлення нового паролю
export interface IResetPasswordRequest {
    email: string,
    token: string,
    newPassword: string,
}