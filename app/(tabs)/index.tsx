import { Text, View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.png');
//import image from '../assets/images/1.jpg';
// This is the main screen of the app. It displays a simple text "Home screen" in the center of the screen.
// It also includes a link to the "About" screen, which is defined in the app/about.tsx file.
export default function index() {
  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        </View> 
        <Text style ={styles.text}>Home screen</Text>
        <Link href="/about">
          <Text style={styles.text}>Go to About</Text>
        </Link>

        </View>
        );
        // This is the main screen of the app. It uses React Native's View and Text components to create the layout and style.
}
const styles = StyleSheet.create({container: {
  flex: 1,
  backgroundColor: '#25292e',
  alignItems: 'center',
  justifyContent: 'center',
},
text: { 
  color: '#fff',
},
// This is a simple style for the container and text elements. The container has a dark background color and centers its content.
button: {
  fontSize:20,
  textDecorationLine: 'underline',
  color: '#fff',
},
// This is a style for the button text. It makes the text larger, underlined, and white in color.

imageContainer: {
  flex: 1,
},
image: {width: 320,
        height: 440,
        borderRadius: 18,
},
});
// This is a simple style for the image container and image elements. The image container takes up the full width and height of the screen, and centers its content.
