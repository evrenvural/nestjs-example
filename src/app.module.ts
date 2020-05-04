import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:1@cluster0-w410h.mongodb.net/test?retryWrites=true&w=majority',
    ),
    CatModule,
  ],
})
export class AppModule {}
