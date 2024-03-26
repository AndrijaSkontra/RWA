import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {

  getMe() {
    let me = new User();
    me.id = 1;
    me.firstName = "Andrija";
    me.lastName = "Skontra";
    me.email = "andrija@example.com";

    return me;
  }
}
