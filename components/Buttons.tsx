import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
type Props = {
    label: string;
    theme ?: 'primary';
    // onPress is a function that is called when the button is pressed. It is optional and can be used to handle button press events.
    // theme is a string that can be used to specify the theme of the button. It is also optional and can be used to apply different styles based on the theme.
    // For example, you can use 'primary' to apply a primary theme style to the button.

};

export default function Button({ label }: Props) {
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
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });