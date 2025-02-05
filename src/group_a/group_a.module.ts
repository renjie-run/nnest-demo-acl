import { Module } from '@nestjs/common';
import { GroupAController } from './group_a.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [GroupAController],
  providers: [],
})
export class GroupAModule {}
