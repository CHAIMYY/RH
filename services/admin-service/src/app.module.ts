import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HrModule } from './hr/hr.module';
import { MongooseModule } from '@nestjs/mongoose';
 

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/hr'), 
    HrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
