import { Controller, HttpResponse, ok } from '../protocols'
//import { BuyUsecase } from "../../domain/usecases/buy-usecase";

export class UserBaseController implements Controller {
  //private useCase:any
  //   constructor(usecase:BuyUsecase) {
  //     this.useCase = usecase
  //   }

  // bodyReqValidate(body:Object) {
  //   for (let properties in body) {
  //     if(!body[properties]) {
  //       throw new Error
  //     }
  //   }

  // }

  async handle(): Promise<HttpResponse> {
    //httpRequest: HttpRequest
    //this.bodyReqValidate(httpRequest.body)
    //const usecaseReturn = await this.useCase.handle(httpRequest)
    return ok('usecaseReturn')
  }
}
