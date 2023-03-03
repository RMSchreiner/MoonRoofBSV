import axios from "axios";
import SecretMessage from "../types/SecretMessage";

const apiClient = axios.create({
    baseURL:"mongodb://localhost:27017",
    headers: {
        "Content-type": "application/json",
    },
});

const findAll = async () => {
    const response = await apiClient.get<SecretMessage[]>("/secretmessage");
    return response.data;
}
const findById = async (id: any) => {
    const response = await apiClient.get<SecretMessage>('/secretmessage/${id}');
    return response.data;
}

const create = async({message}: SecretMessage) => {
    const response = await apiClient.post<any>("/secretmessage", {message});
    return response.data;
}

const MessageService = {
findAll,
findById,
create,
}

export default MessageService;
//https://www.bezkoder.com/react-query-axios-typescript/