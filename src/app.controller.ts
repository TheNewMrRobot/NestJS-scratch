import { Controller, Module, Get } from "@nestjs/common";

@Controller("/rootController")
export class AppController {
  @Get("/check")
  getRootRoute() {
    return "Hello From NEST JS";
  }
  @Get("/bye")
  getByeRoot() {
    return "bye From NEST JS";
  }
}
