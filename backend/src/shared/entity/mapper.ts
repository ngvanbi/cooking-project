import { UserDto } from '@user/dto/user.dto';
import { UserEntity } from '@user/entity/user.entity';

export const toUserDto = (userData: UserEntity): UserDto => {
  const { id, email, firstName, lastName, isActive, onlineAt, createdAt, updatedAt } = userData;

  const userDto: UserDto = {
    id,
    email,
    firstName,
    lastName,
    isActive,
    onlineAt,
    createdAt,
    updatedAt,
  };

  return userDto;
};
