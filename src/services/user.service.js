import createApiClient from "./api.service";

class UserService {
  constructor(baseUrl = "/api/users") {
    this.api = createApiClient(baseUrl);
  }
  async login(data) {
    return await this.api.post("/login", data);
  }
  async signup(data) {
    return await this.api.post("/signup", data);
  }
  async logout() {
    try {
      return await this.api.get("/logout").data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new UserService();
