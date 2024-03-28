import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  async getAuthor() {
    return 'author';
  }
}
