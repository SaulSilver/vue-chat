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
      const { id, name } = await chatKit.connectUser(userId);
      commit("setUser", { username: id, name: name });
      commit("setReconnect", false);

      console.log("state.user: ", state.user);
    } catch (err) {
      handleError(commit, err);
    } finally {
      commit("setLoading", false);
    }
  }
};
