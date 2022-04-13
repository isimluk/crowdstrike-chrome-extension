export class Manager {
  private static instance: Manager;
  public static getInstance(): Manager {
    if (!Manager.instance) {
      Manager.instance = new Manager();
    }
    return Manager.instance;
  }
  public loggedIn(): boolean {
    return false;
  }
}
