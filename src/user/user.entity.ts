import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('playground-user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive?: boolean;
}