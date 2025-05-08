import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
type Props = {
    label: string;
    theme ?: 'primary';
    // onPress is a function that is called when the button is pressed. It is optional and can be used to handle button press events.
    // theme is a string that can be used to specify the theme of the button. It is also optional and can be used to apply different styles based on the theme.
    // For example, you can use 'primary' to apply a primary theme style to the button.

};

export default function Button({ label, theme }: Props) {
  // This is a functional component that takes in props and returns a button. It uses the Pressable component from React Native to create a button that can be pressed. The label prop is passed to the button as the text label. The theme prop is used to determine the style of the button.
  if (theme === 'primary') {
    return (
      <View
      style={[
        styles.buttonContainer,
        {borderWidth: 4, borderColor: '#ffd33d',borderRadius: 18,}
      ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={() => alert('You pressed a button.')}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel,{color: '#25292e'}] }>{label}</Text>
        </Pressable>
      </View>
    );
  }
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });