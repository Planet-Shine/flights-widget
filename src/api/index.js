
import createClient, {deleteToken} from './client'
const client = createClient();

const api = {
    flights() {
        return client({
           path: './data/data.json',
           method: "GET"
        });
    }
};

export default api;