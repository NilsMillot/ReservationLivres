import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { booksProviders } from './books.providers';
import { databaseProviders } from './database.providers';
// import { booksProviders } from './books.providers';

@Module({
  imports: [], //import les modeles (user et book) (voir le dernier doc modeles envoyés par julien)
  controllers: [AppController],
  providers: [AppService,
              ...databaseProviders,
              ...booksProviders,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
