import chatkit from "../chatkit";

const handleError = (commit, error) => {
  const msg = error.message || error.info.error_description;
  commit("setError", msg);
};

export default {
  async login({ commit, state }, userId) {
    try {
      commit("setError", "");
      commit("setLoading", true);
      // Connect user to chatkit service
      const currentUser = await chatkit.connectUser(userId);
      commit("setUser", { username: currentUser.id, name: currentUser.name });
      commit("setReconnect", false);

      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }));
      commit("setRooms", rooms);
      const activeRoom = state.activeRoom || rooms[0];
      commit("setActiveRoom", { id: activeRoom.id, name: activeRoom.name });
      await chatkit.subscribeToRoom(activeRoom.id);
      return true;
    } catch (err) {
      handleError(commit, err);
    } finally {
      commit("setLoading", false);
    }
  },
  async changeRoom({ commit }, roomId) {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId);
      commit("setActiveRoom", { id, name });
    } catch (err) {
      handleError(commit, err);
    }
  },
  async sendMessage({ commit }, msg) {
    try {
      commit("setError", "");
      commit("setSending", true);
      return await chatkit.sendMessage(msg);
    } catch (err) {
      handleError(commit, err);
    } finally {
      commit("setSending", false);
    }
  },
  async logout({ commit }) {
    commit("reset");
    chatkit.disconnectUser();
    window.localStorage.clear();
  }
};
