import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';

@Controller('cat')
export class CatController {
  constructor(private catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CatDto[]> {
    return this.catsService.findAll();
  }
}
