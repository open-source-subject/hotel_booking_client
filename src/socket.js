import { io } from "socket.io-client";
import storageService from "./services/storage.service";

const URL = process.env.REACT_APP_SOCKET_URL ?? "http://localhost:8080";
const token = storageService.get("token");
const socket = io(URL + "/booking", {
  transports: ["websocket"],
  auth: {
    token: `Bearer ${token}`,
  },
});

export default socket;