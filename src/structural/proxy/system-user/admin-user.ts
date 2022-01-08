import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { street: 'Av. Brasil', number: 50 },
          { street: 'Av. A', number: 20 },
        ]);
      }, 2000);
    });
  }
}
