import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    BookModule.registerAsync({
      useFactory: () => {
        console.log('inside registerAsync, this is logged second', {
          authorEnabled: true,
        });
        return { authorEnabled: true };
      },
    }), // THIS DOES NOT WORK: authorEnabled is still false in the BookModule
    // BookModule.register({ authorEnabled: true }), // THIS WORKS: authorEnabled is true in the BookModule
  ],
})
export class AppModule {}
