import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

const MESSAGE_LIMIT = Number(process.env.VUE_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;
let activeRoom = null;

async function connectUser(userId) {
  const chatManager = new ChatManager({
    instanceLocator: process.env.VUE_APP_INSTANCE_LOCATOR,
    tokenProvider: new TokenProvider({ url: process.env.VUE_APP_TOKEN_URL }),
    userId
  });
  currentUser = await chatManager.connect();
  return currentUser;
}

export default { connectUser };
