import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { onlineMap } from 'src/events/onlineMap';
import { Repository } from 'typeorm';
import { DMs } from '../entities/DMs';
import { Users } from '../entities/Users';
import { EventsGateway } from '../events/events.gateway';
import { DMsRepository } from './dms.repository';
import { UsersRepository } from '../users/users.repository';

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

@Injectable()
export class DMsService {
  constructor(
    // @InjectRepository(Workspaces)
    // private workspacesRepository: Repository<Workspaces>,
    @InjectRepository(DMsRepository) private dmsRepository: Repository<DMs>,
    // @InjectRepository(UsersRepository) private usersRepository: Repository<Users>,
    // private readonly eventsGateway: EventsGateway,
  ) {}

  async getDMs(): Promise <DMs> {
    const found = await this.dmsRepository.findOne(1);
    if(!found) {
        throw new NotFoundException("Can't find Board with id");
    }
    return found;
}

  // async getWorkspaceDMs(url: string, myId: number) {
  //   return (
  //     this.usersRepository
  //       .createQueryBuilder('user')
  //       .leftJoin('user.dms', 'dms', 'dms.senderId = :myId', { myId })
  //       // .leftJoin('dms', 'workspace', 'workspace.url = :url', { url })
  //       // .groupBy('dms.senderId')
  //       .getMany()
  //   );
  // }

  // async getWorkspaceDMChats(
  //   id: number,
  //   myId: number,
  //   perPage: number,
  //   page: number,
  // ) {
  //   return this.dmsRepository
  //     .createQueryBuilder('dms')
  //     .innerJoinAndSelect('dms.sender', 'sender')
  //     .innerJoinAndSelect('dms.receiver', 'receiver')
  //   //   .innerJoin('dms.workspace', 'workspace')
  //     .where('dms.users_id = :myId', { myId })
  //     .andWhere('dms.members_id = :id', { id })
  //   //   .andWhere('workspace.url = :url', { url })
  //     .orderBy('dms.created_at', 'DESC')
  //     .take(perPage)
  //     .skip(perPage * (page - 1))
  //     .getMany();
  // }

  // async createWorkspaceDMChats(
  //   content: string,
  //   id: number,
  //   myId: number,
  // ) {

  //   const dm = new DMs();
  //   dm.users_id = myId;
  //   dm.members_id = id;
  //   dm.content = content;
  //   const savedDm = await this.dmsRepository.save(dm);
  //   const dmWithSender = await this.dmsRepository.findOne({
  //     where: { id: savedDm.id },
  //     relations: ['Sender'],
  //   });
  //   const receiverSocketId = getKeyByValue(
  //     onlineMap[`/ws-${myId}`],
  //     Number(id),
  //   );
  //   this.eventsGateway.server.to(receiverSocketId).emit('dm', dmWithSender);
  // }
}