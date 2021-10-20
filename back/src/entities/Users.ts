import {
  BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
//   import { ChannelChats } from './ChannelChats';
//   import { ChannelMembers } from './ChannelMembers';
//   import { Channels } from './Channels';
  import { DMs } from './DMs';
//   import { Mentions } from './Mentions';
//   import { WorkspaceMembers } from './WorkspaceMembers';
//   import { Workspaces } from './Workspaces';
  
//   @Index('nickname', ['nickname'], { unique: true })
  @Entity()
  export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
  
    @Column('varchar', { name: 'nickname', length: 45 })
    nickname: string;
  
    @Column('varchar', { name: 'slimeColor', length: 45 })
    slimeColor: string;

    @Column('int', { name: 'level', default: 0 })
    level: number;
  
    // @CreateDateColumn()
    // createdAt: Date;
  
    // @UpdateDateColumn()
    // updatedAt: Date;
  
    // @DeleteDateColumn()
    // deletedAt: Date | null;
  
    // @OneToMany(() => ChannelChats, (channelchats) => channelchats.User)
    // ChannelChats: ChannelChats[];
  
    // @OneToMany(() => ChannelMembers, (channelmembers) => channelmembers.User)
    // ChannelMembers: ChannelMembers[];
  
    // @OneToMany(() => DMs, (dms) => dms.Sender)
    // DMs: DMs[];
  
    // @OneToMany(() => DMs, (dms) => dms.Receiver)
    // DMs2: DMs[];
  
    // @OneToMany(() => Mentions, (mentions) => mentions.Sender)
    // Mentions: Mentions[];
  
    // @OneToMany(() => Mentions, (mentions) => mentions.Receiver)
    // Mentions2: Mentions[];
  
    // @OneToMany(
    //   () => WorkspaceMembers,
    //   (workspacemembers) => workspacemembers.User,
    // )
    // WorkspaceMembers: WorkspaceMembers[];
  
    // @OneToMany(() => Workspaces, (workspaces) => workspaces.Owner)
    // OwnedWorkspaces: Workspaces[];
  
    // @ManyToMany(() => Workspaces, (workspaces) => workspaces.Members)
    // @JoinTable({
    //   name: 'workspacemembers',
    //   joinColumn: {
    //     name: 'UserId',
    //     referencedColumnName: 'id',
    //   },
    //   inverseJoinColumn: {
    //     name: 'WorkspaceId',
    //     referencedColumnName: 'id',
    //   },
    // })
    // Workspaces: Workspaces[];
  
    // @ManyToMany(() => Channels, (channels) => channels.Members)
    // @JoinTable({
    //   name: 'channelmembers',
    //   joinColumn: {
    //     name: 'UserId',
    //     referencedColumnName: 'id',
    //   },
    //   inverseJoinColumn: {
    //     name: 'ChannelId',
    //     referencedColumnName: 'id',
    //   },
    // })
    // Channels: Channels[];
  }
  