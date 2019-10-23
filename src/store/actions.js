import chatKit from "../chatkit";

const handleError = (commit, error) => {
  const msg = error.message || error.info.error_description;
  commit("setError", msg);
};

export default {
  async login({ commit, state }, userId) {
    try {
      commit("setError", "");
      commit("setLoading", true);
      // Connect user to ChatKit service
      const currentUser = await chatKit.connectUser(userId);
      commit("setUser", { username: currentUser.id, name: currentUser.name });
      commit("setReconnect", false);

      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }));
      commit("setRooms", rooms);
      const activeRoom = state.activeRoom || rooms[0];
      commit("setActiveRoom", { id: activeRoom.id, name: activeRoom.name });
      await chatKit.subscribeToRoom(activeRoom.id);
      return true;
    } catch (err) {
      handleError(commit, err);
    } finally {
      commit("setLoading", false);
    }
  }
};
