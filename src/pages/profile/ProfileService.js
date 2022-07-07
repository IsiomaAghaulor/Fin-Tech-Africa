import axios from "axios";

const PROFILE_URL = "http://localhost:9005/api/v1/user";

class ProfileService{
    getUser(header) {
        return axios.get(PROFILE_URL,{headers: header});
      }
}

export default new ProfileService();