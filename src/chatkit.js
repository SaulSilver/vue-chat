import moment from "moment";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import store from "./store";

const MESSAGE_LIMIT = Number(process.env.VUE_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;
let activeRoom = null;

const connectUser = async userId => {
  const chatManager = new ChatManager({
    instanceLocator: process.env.VUE_APP_INSTANCE_LOCATOR,
    tokenProvider: new TokenProvider({ url: process.env.VUE_APP_TOKEN_URL }),
    userId
  });
  currentUser = await chatManager.connect();
  return currentUser;
};

const setMembers = () => {
  const members = activeRoom.users.map(user => ({
    username: user.id,
    name: user.name,
    presence: user.presence.state
  }));
  store.commit("setUsers", members);
};

const subscribeToRoom = async roomId => {
  store.commit("clearChatRoom");
  const hooks = {
    onMessage: message => {
      store.commit("addMessage", {
        name: message.sender.name,
        username: message.senderId,
        text: message.text,
        date: moment(message.createdAt).format("h:mm:ss a D-MM-YYYY")
      });
    },
    onPresenceChanged: () => setMembers(),
    onUserStartedTyping: user => store.commit("setUserTyping", user.id),
    onUserStoppedTyping: () => store.commit("setUserTyping", null)
  };
  activeRoom = await currentUser.subscribeToRoom({
    roomId,
    messageLimit: MESSAGE_LIMIT,
    hooks
  });
  setMembers();
  return activeRoom;
};

const sendMessage = async text => {
  const messageId = await currentUser.sendMessage({
    text,
    roomId: activeRoom.id
  });
  return messageId;
};

export const isTyping = roomId => currentUser.isTypingIn({ roomId });

const disconnectUser = () => currentUser.disconnect();

export default { connectUser, subscribeToRoom, sendMessage, disconnectUser };
