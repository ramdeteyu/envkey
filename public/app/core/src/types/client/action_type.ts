enum ActionType {
  REGISTER = "envkey/client/REGISTER",
  CREATE_SESSION = "envkey/client/CREATE_SESSION",
  GET_SESSION = "envkey/client/GET_SESSION",
  AUTHENTICATE_CLI_KEY = "envkey/client/AUTHENTICATE_CLI_KEY",

  SELECT_DEFAULT_ACCOUNT = "envkey/client/SELECT_DEFAULT_ACCOUNT",
  SIGN_OUT = "envkey/client/SIGN_OUT",
  FORGET_DEVICE = "envkey/client/FORGET_DEVICE",

  RESET_CLIENT_STATE = "envkey/client/RESET_CLIENT_STATE",

  SET_TRUSTED_ROOT_PUBKEY = "envkey/client/SET_TRUSTED_ROOT_PUBKEY",
  ADD_TRUSTED_SESSION_PUBKEY = "envkey/client/ADD_TRUSTED_SESSION_PUBKEY",
  CLEAR_TRUSTED_SESSION_PUBKEY = "envkey/client/CLEAR_TRUSTED_SESSION_PUBKEY",

  VERIFIED_SIGNED_TRUSTED_ROOT_PUBKEY = "envkey/client/VERIFIED_SIGNED_TRUSTED_ROOT_PUBKEY",

  PROCESS_REVOCATION_REQUESTS = "envkey/client/PROCESS_REVOCATION_REQUESTS",
  PROCESS_ROOT_PUBKEY_REPLACEMENTS = "envkey/client/PROCESS_ROOT_PUBKEY_REPLACEMENTS",

  CREATE_APP = "envkey/client/CREATE_APP",

  CREATE_ENTRY_ROW = "envkey/client/CREATE_ENTRY_ROW",
  UPDATE_ENTRY_ROW = "envkey/client/UPDATE_ENTRY_ROW",
  REMOVE_ENTRY_ROW = "envkey/client/REMOVE_ENTRY_ROW",

  CREATE_ENTRY = "envkey/client/CREATE_ENTRY",
  UPDATE_ENTRY = "envkey/client/UPDATE_ENTRY",
  REMOVE_ENTRY = "envkey/client/REMOVE_ENTRY",
  UPDATE_ENTRY_VAL = "envkey/client/UPDATE_ENTRY_VAL",
  REVERT_ENVIRONMENT = "envkey/client/REVERT_ENVIRONMENT",
  IMPORT_ENVIRONMENT = "envkey/client/IMPORT_ENVIRONMENT",

  COMMIT_ENVS = "envkey/client/COMMIT_ENVS",
  RESET_ENVS = "envkey/client/RESET_ENVS",

  FETCH_ENVS = "envkey/client/FETCH_ENVS",

  EXPORT_ENVIRONMENT = "envkey/client/EXPORT_ENVIRONMENT",

  INVITE_USERS = "envkey/client/INVITE_USERS",
  ADD_PENDING_INVITE = "envkey/client/ADD_PENDING_INVITE",
  UPDATE_PENDING_INVITE = "envkey/client/EDIT_PENDING_INVITE",
  REMOVE_PENDING_INVITE = "envkey/client/REMOVE_PENDING_INVITE",
  CLEAR_GENERATED_INVITES = "envkey/client/CLEAR_GENERATED_INVITES",

  LOAD_INVITE = "envkey/client/LOAD_INVITE",
  ACCEPT_INVITE = "envkey/client/ACCEPT_INVITE",
  RESET_INVITE = "envkey/client/RESET_INVITE",

  APPROVE_DEVICES = "envkey/client/APPROVE_DEVICES",
  CLEAR_GENERATED_DEVICE_GRANTS = "envkey/client/CLEAR_GENERATED_DEVICE_GRANTS",
  LOAD_DEVICE_GRANT = "envkey/client/LOAD_DEVICE_GRANT",
  ACCEPT_DEVICE_GRANT = "envkey/client/ACCEPT_DEVICE_GRANT",
  RESET_DEVICE_GRANT = "envkey/client/RESET_DEVICE_GRANT",
  RESET_EXTERNAL_AUTH = "envkey/client/RESET_EXTERNAL_AUTH",

  CREATE_CLI_USER = "envkey/client/CREATE_CLI_USER",
  CLEAR_GENERATED_CLI_USERS = "envkey/client/CLEAR_GENERATED_CLI_USERS",

  UPDATE_USER_ROLES = "envkey/client/UPDATE_USER_ROLES",

  CREATE_SERVER = "envkey/client/CREATE_SERVER",
  CREATE_LOCAL_KEY = "envkey/client/CREATE_LOCAL_KEY",
  GENERATE_KEY = "envkey/client/GENERATE_KEY",
  CLEAR_GENERATED_ENVKEY = "envkey/client/CLEAR_GENERATED_ENVKEY",
  CLEAR_ALL_GENERATED_ENVKEYS = "envkey/client/CLEAR_ALL_GENERATED_ENVKEYS",

  CONNECT_BLOCKS = "envkey/client/CONNECT_BLOCKS",

  GRANT_APPS_ACCESS = "envkey/client/GRANT_APPS_ACCESS",

  CREATE_GROUP_MEMBERSHIPS = "envkey/client/CREATE_GROUP_MEMBERSHIPS",

  RBAC_UPDATE_ORG_ROLE = "envkey/client/RBAC_UPDATE_ORG_ROLE",
  RBAC_UPDATE_APP_ROLE = "envkey/client/RBAC_UPDATE_APP_ROLE",
  RBAC_UPDATE_ENVIRONMENT_ROLE = "envkey/client/RBAC_UPDATE_ENVIRONMENT_ROLE",

  INCLUDE_APP_ROLES = "envkey/client/INCLUDE_APP_ROLES",

  CREATE_RECOVERY_KEY = "envkey/client/CREATE_RECOVERY_KEY",
  CLEAR_GENERATED_RECOVERY_KEY = "envkey/client/CLEAR_GENERATED_RECOVERY_KEY",
  LOAD_RECOVERY_KEY = "envkey/client/LOAD_RECOVERY_KEY",
  REDEEM_RECOVERY_KEY = "envkey/client/REDEEM_RECOVERY_KEY",
  RESET_RECOVERY_KEY = "envkey/client/RESET_RECOVERY_KEY",

  CLEAR_LOGS = "envkey/client/CLEAR_LOGS",
  RESET_EMAIL_VERIFICATION = "envkey/client/RESET_EMAIL_VERIFICATION",

  INIT_DEVICE = "envkey/client/INIT_DEVICE",
  DISCONNECT_CLIENT = "envkey/client/DISCONNECT_CLIENT",
  SET_DEVICE_PASSPHRASE = "envkey/client/SET_DEVICE_PASSPHRASE",
  CLEAR_DEVICE_PASSPHRASE = "envkey/client/CLEAR_DEVICE_PASSPHRASE",
  SET_DEFAULT_DEVICE_NAME = "envkey/client/SET_DEFAULT_DEVICE_NAME",
  SET_DEVICE_LOCKOUT = "envkey/client/SET_DEVICE_LOCKOUT",
  CLEAR_DEVICE_LOCKOUT = "envkey/client/CLEAR_DEVICE_LOCKOUT",
  LOCK_DEVICE = "envkey/client/LOCK_DEVICE",
  UNLOCK_DEVICE = "envkey/client/UNLOCK_DEVICE",

  MERGE_PERSISTED = "envkey/client/MERGE_PERSISTED",
  FETCHED_CLIENT_STATE = "envkey/client/FETCHED_CLIENT_STATE",

  RECEIVED_ORG_SOCKET_MESSAGE = "envkey/client/RECEIVED_ORG_SOCKET_MESSAGE",

  WRITE_CLIPBOARD = "envkey/client/WRITE_CLIPBOARD",
  OPEN_URL = "envkey/client/OPEN_URL",

  DEPLOY_SELF_HOSTED = "envkey/client/DEPLOY_SELF_HOSTED",
  SET_DEPLOY_SELF_HOSTED_STATUS = "envkey/client/SET_DEPLOY_SELF_HOSTED_STATUS",
  SIGN_IN_PENDING_SELF_HOSTED = "envkey/client/SIGN_IN_PENDING_SELF_HOSTED",

  NETWORK_UNREACHABLE = "envkey/client/NETWORK_UNREACHABLE",
  NETWORK_REACHABLE = "envkey/client/NETWORK_REACHABLE",
  CHECK_SELF_HOSTED_UPGRADES_AVAILABLE = "envkey/client/CHECK_SELF_HOSTED_UPGRADES_AVAILABLE",
  SKIP_SELF_HOSTED_UPGRADE_FOR_NOW = "envkey/client/SKIP_SELF_HOSTED_UPGRADE_FOR_NOW",

  CLEAR_PENDING_SELF_HOSTED_DEPLOYMENT = "envkey/client/CLEAR_PENDING_SELF_HOSTED_DEPLOYMENT",

  SET_UI_LAST_SELECTED_ACCOUNT_ID = "envkey/client/SET_UI_LAST_SELECTED_ACCOUNT_ID",
  SET_UI_LAST_SELECTED_URL = "envkey/client/SET_UI_LAST_SELECTED_URL",

  CLEAR_PENDING_EXTERNAL_AUTH_SESSION = "envkey/client/CLEAR_PENDING_EXTERNAL_AUTH_SESSION",

  SET_EXTERNAL_AUTH_SESSION_RESULT = "envkey/client/SET_EXTERNAL_AUTH_SESSION_RESULT",
  WAIT_FOR_EXTERNAL_AUTH = "envkey/client/WAIT_FOR_EXTERNAL_AUTH",
  CREATE_EXTERNAL_AUTH_SESSION = "envkey/client/CREATE_EXTERNAL_AUTH_SESSION",

  CREATE_EXTERNAL_AUTH_SESSION_FOR_LOGIN = "envkey/client/CREATE_EXTERNAL_AUTH_SESSION_FOR_LOGIN",

  SET_INVITE_EXTERNAL_AUTH_SESSION_RESULT = "envkey/client/SET_INVITE_EXTERNAL_AUTH_SESSION_RESULT",
  WAIT_FOR_INVITE_EXTERNAL_AUTH = "envkey/client/WAIT_FOR_INVITE_EXTERNAL_AUTH",
  CREATE_EXTERNAL_AUTH_SESSION_FOR_INVITE = "envkey/client/CREATE_EXTERNAL_AUTH_SESSION_FOR_INVITE",

  REENCRYPT_PERMITTED_LOOP = "envkey/client/REENCRYPT_PERMITTED_LOOP",
  REENCRYPT_ENVS = "envkey/client/REENCRYPT_ENVS",

  CLEAR_CACHED = "envkey/client/CLEAR_CACHED",

  ACCOUNT_ACTIVE = "envkey/client/ACCOUNT_ACTIVE",

  IMPORT_ORG = "envkey/client/IMPORT_ORG",
  SET_IMPORT_ORG_STATUS = "envkey/client/SET_IMPORT_ORG_STATUS",

  EXPORT_ORG = "envkey/client/EXPORT_ORG",

  CLEAR_THROTTLE_ERROR = "envkey/client/CLEAR_THROTTLE_ERROR",

  CLEAR_ORPHANED_BLOBS = "envkey/client/CLEAR_ORPHANED_BLOBS",
}

export default ActionType;
