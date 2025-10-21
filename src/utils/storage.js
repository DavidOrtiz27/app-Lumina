
// Placeholder functions to implement later
export async function saveData(key, value) {
  // await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getData(key) {
  // const json = await AsyncStorage.getItem(key);
  // return json != null ? JSON.parse(json) : null;
}

export async function removeData(key) {
  // await AsyncStorage.removeItem(key);
}

export default {
  saveData,
  getData,
  removeData,
};
