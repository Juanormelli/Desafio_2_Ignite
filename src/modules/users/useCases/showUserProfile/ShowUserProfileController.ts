import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    console.log("Entrou")
    try {
      const user_id = request.params.user_id;

      const all = this.showUserProfileUseCase.execute({ user_id });


      return response.status(201).json(all);
    }
    catch (error) {
      return response.status(404).json({ error: error.message });
    }

  }
}

export { ShowUserProfileController };
