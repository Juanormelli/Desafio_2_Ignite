import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    console.log("Entrou")
    try {
      const user = request.headers.user_id;
      const user_id=user.toString();
      console.log(user_id)
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    }
    catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListAllUsersController };
