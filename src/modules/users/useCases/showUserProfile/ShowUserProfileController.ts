import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.json(user);
    } catch (err) {
      return response
        .status(err.status || 500)
        .json({ error: err.message || "Internal error" });
    }
  }
}

export { ShowUserProfileController };
