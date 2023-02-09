import {authToken} from "@/config";
// @ts-ignore
import {removeKey, setKey} from "@/util/localStorage";

export async function resetToken() {
  await removeKey(authToken);
}

export async function setToken(token: string) {
  await setKey(authToken, token);
}
