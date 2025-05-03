import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
// This is a simple screen that displays the text "About screen" in the center of the screen.
// It uses React Native's View and Text components to create the layout and style.
// The styles are defined using StyleSheet.create to ensure better performance and readability.