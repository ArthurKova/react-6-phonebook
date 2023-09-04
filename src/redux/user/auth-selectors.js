const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user?.name;
const getUserRefresh = state => state.auth.getUserRefreshStatus;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserRefresh,
};
export default authSelectors;
