import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  department: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  salary: number;
}
