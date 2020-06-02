import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedEntity } from '../../shared/entity/extended-entity';

@Entity('users')
export class UserEntity extends ExtendedEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsEmail()
  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @Column()
  public onlineAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  /**
   *  checkPassword
   */
  public async checkPassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
