import { Api } from "./apiService";

const ChatService = {
    sendMessage(msg: string) {
        return Api.post('/chat', { message: msg }).then((response) => response.data);
    }
};

export { ChatService };