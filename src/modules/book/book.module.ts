import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './book.module-definition';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class BookModule extends ConfigurableModuleClass {}
