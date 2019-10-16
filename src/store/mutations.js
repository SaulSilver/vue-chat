export default {
  setError(state, error) {
    state.error = error;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setUser(state, user) {
    state.user = user;
  },
  setReconnect(state, reconnect) {
    state.reconnect = reconnect;
  },
  setActiveRoom(state, roomId) {
    state.activeRoom = roomId;
  },
  setRooms(state, rooms) {
    state.rooms = rooms;
  },
  setUsers(state, users) {
    state.users = users;
  },
  clearChatRoom(state) {
    state.users = [];
    state.message = [];
  },
  setMessages(state, messages) {
    state.messages = messages;
  },
  addMessage(state, message) {
    state.messages.push(message);
  },
  setSending(state, status) {
    state.status = status;
  },
  setUserTyping(state, userId) {
    state.userTyping = userId;
  },
  // FIXME: might be written as "state.error = null" and so on
  reset(state) {
    state = {
      ...state,
      error: null,
      users: [],
      message: [],
      rooms: [],
      user: null
    };
  }
};
