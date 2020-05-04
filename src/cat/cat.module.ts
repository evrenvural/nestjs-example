import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CatSchema } from './schema/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
