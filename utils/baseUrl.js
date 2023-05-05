import { Platform } from "react-native";

export default baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:3306' : 'http://localhost:3306';