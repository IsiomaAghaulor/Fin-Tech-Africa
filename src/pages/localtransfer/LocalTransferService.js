import { apiGet, apiPost } from "../../utils/apiHelper"

class LocalTransferService {
  async saveTransaction(user,header) {
    const response = await apiPost("/api/v1/transfers/local", user, header, true)
    console.log(response.data);
    return response.data;
    // return axios.post(LOCAL_TRANSFER_URL, user, {headers: header});
  }

}
export default new LocalTransferService();