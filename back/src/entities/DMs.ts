import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
//   import { Workspaces } from './Workspaces';
  import { Users } from './Users';
  
  // @Index('WorkspaceId', ['WorkspaceId'], {})
  // @Index('dms_ibfk_2', ['SenderId'], {})
  // @Index('dms_ibfk_3', ['ReceiverId'], {})
  @Entity({ schema: 'dontpanic', name: 'DMs' })
  export class DMs {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
  
    @Column('longtext', { name: 'content' })
    content: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @Column('int', { name: 'users_id', nullable: true })
    users_id: number | null;
  
    @Column('int', { name: 'members_id', nullable: true })
    members_id: number | null;
  
    // @ManyToOne(() => Workspaces, (workspaces) => workspaces.DMs, {
    //   onDelete: 'SET NULL',
    //   onUpdate: 'CASCADE',
    // })
    // @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
    // Workspace: Workspaces;
  
    // @ManyToOne(() => Users, (users) => users.DMs, {
    //   onDelete: 'SET NULL',
    //   onUpdate: 'CASCADE',
    // })
    // @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
    // Sender: Users;
  
    // @ManyToOne(() => Users, (users) => users.DMs2, {
    //   onDelete: 'SET NULL',
    //   onUpdate: 'CASCADE',
    // })

    // @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
    // Receiver: Users;
  }