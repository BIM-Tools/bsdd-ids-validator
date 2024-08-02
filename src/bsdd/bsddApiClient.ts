import { BsddApi } from "./bsddApi";

export class BsddApiClient<SecurityDataType> extends BsddApi<SecurityDataType> {
  constructor(baseUrl: string) {
    super({ baseUrl });
  }
}