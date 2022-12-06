import { CustomError } from "../../../../customError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new CustomError({ status: 400, message: "User not found" });
    }

    if (user.admin === false) {
      throw new CustomError({ status: 400, message: "User not authorized" });
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
