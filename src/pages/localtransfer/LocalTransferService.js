import axios from "axios";

const LOCAL_TRANSFER_URL = "https://mentorship-payment-app.herokuapp.com/api/v1/transfers/local";

class LocalTransferService {
  saveTransaction(user,header) {
    return axios.post(LOCAL_TRANSFER_URL, user, {headers: header});
  }
}
export default new LocalTransferService();