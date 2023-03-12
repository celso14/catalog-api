import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/db/database.module';
import { AppController } from './infra/http/controllers/app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
