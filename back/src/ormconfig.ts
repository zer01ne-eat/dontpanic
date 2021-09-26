import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
// import { ChannelChats } from './entities/ChannelChats';
// import { ChannelMembers } from './entities/ChannelMembers';
// import { Channels } from './entities/Channels';
import { DMs } from './entities/DMs';
// import { Mentions } from './entities/Mentions';
import { Users } from './entities/Users';
// import { WorkspaceMembers } from './entities/WorkspaceMembers';
// import { Workspaces } from './entities/Workspaces';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    DMs,
    Users,
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
  debug: true,
};

export = config;