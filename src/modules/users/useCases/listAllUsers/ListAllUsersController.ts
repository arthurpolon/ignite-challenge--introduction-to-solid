import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;

      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.json(all);
    } catch (err) {
      return response
        .status(err.status || 500)
        .json({ error: err.message || "Internal error" });
    }
  }
}

export { ListAllUsersController };
