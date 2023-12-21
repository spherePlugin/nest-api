import { Module } from '@nestjs/common';
import { BeginService } from './begin.service';
import { BeginController } from './begin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeginPostEntity } from './entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BeginPostEntity])
  ],
  providers: [BeginService],
  controllers: [BeginController]
})
export class BeginModule {}
