import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Cat } from './interface/cat.interface';
import { CatDto } from './dto/cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createdCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createdCatDto);
    return createdCat.save();
  }

  findAll(): Promise<CatDto[]> {
    return this.catModel.find().exec();
  }
}
