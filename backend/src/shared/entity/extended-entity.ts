import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, CreateDateColumn } from 'typeorm';

export class ExtendedEntity extends BaseEntity {
  public id?: string;

  @Column({ nullable: false, default: false })
  public isDeleted: boolean;

  @ApiProperty()
  @CreateDateColumn()
  public createdAt: Date;

  @ApiProperty()
  @CreateDateColumn()
  public updatedAt: Date;
}
