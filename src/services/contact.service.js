import createApiClient from "./api.service";
import getCookie from "../utils/getCookie";

class ContactService {
  constructor(baseUrl = "/api/contacts") {
    this.api = createApiClient(baseUrl);
  }
  // async getAll() {
  //   return (await this.api.get("/")).data;
  // }
  async getAllOfMe() {
    try {
      return (
        await this.api.get("/getallofme", {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
        })
      ).data;
    } catch (err) {
      console.log(err);
    }
  }
  async create(data) {
    return (
      await this.api.post("/", data, {
        headers: { Authorization: `Bearer ${getCookie("jwt")}` },
      })
    ).data;
  }
  // async deleteAll() {
  //   return (await this.api.delete("/")).data;
  // }
  async deleteAllOfMe() {
    return (await this.api.delete("/deleteallofme")).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}

export default new ContactService();
