import { CommonModule } from './modules/common/common.module';
import { AuthModule } from './logical/auth/auth.module';
import { DbModule } from './../libs/@libs/db/src/db.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './modules/pet/petstore.module';
import { AdminModule } from './modules/admin/admin.module';
import { AdminController } from './modules/admin/admin.controller';
import { SystemLogsModule } from './modules/system-logs/system-logs.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RoleModule } from './modules/role/role.module';
import { MenuModule } from './modules/menu/menu.module';
import { PetsCategoryModule } from './modules/pets-category/pets-category.module';

@Module({
  imports: [
    // 静态文件访问
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    PetModule,
    DbModule,
    AdminModule,
    AuthModule,
    SystemLogsModule,
    CommonModule,
    RoleModule,
    MenuModule,
    PetsCategoryModule,
  ],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
