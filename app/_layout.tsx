import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen name="(tabs)" options= {{ headerShown : false }}/>
    <Stack.Screen name= "+not-found"/>
   </Stack>
   );
}
// This is the root layout of the app. It uses the Stack component from the expo-router package to define the navigation structure.
