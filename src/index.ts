import { Auth, Config, ConfigOptions } from "@datenkraft/bb-base-api-ts-client";
import { Configuration } from "./Generated";

export namespace ControlServerApiClient {
  export async function getApiConfig(
    configOption: ConfigOptions,
    endpointUrl: string | null = null
  ) {
    return new Configuration({
      basePath:
        endpointUrl ?? process.env.X_DATENKRAFT_CONTROL_SERVER_API_URL ?? "",
      accessToken: await new Auth(new Config(configOption)).getAccessToken(),
    });
  }
}
