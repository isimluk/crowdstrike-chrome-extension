import {
  FalconClient,
  FalconCloud,
  FalconErrorExplain,
} from "crowdstrike-falcon";

export class Manager {
  async login(cloud: FalconCloud, clientId: string, clientSecret: string) {
    this.client = new FalconClient({
      cloud: cloud,
      clientId: clientId,
      clientSecret: clientSecret,
    });
    return await this.client.sensorDownload
      .getSensorInstallersCCIDByQuery()
      .catch(async function (err) {
        alert("Could verify login: " + (await FalconErrorExplain(err)));
        throw err;
      });
  }

  private client?: FalconClient;

  private static instance: Manager;
  public static getInstance(): Manager {
    if (!Manager.instance) {
      Manager.instance = new Manager();
    }
    return Manager.instance;
  }
}
