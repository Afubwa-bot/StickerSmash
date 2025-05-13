import { View, StyleSheet} from 'react-native';
import Button from '@/components/Buttons';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '@/components/ImageViewer';
// This code imports various components and libraries from React Native and Expo. It includes the Text, View, StyleSheet components from React Native, Link from expo-router, Image from expo-image, and Button from a custom component.
// import image picker form expo-image-picker

//import { Image } from 'react-native';
//import { Image } from 'expo-image';
const PlaceholderImage = require('@/assets/images/background-image.png');
//import image from '../assets/images/1.jpg';
// This is the main screen of the app. It displays a simple text "Home screen" in the center of the screen.
// It also includes a link to the "About" screen, which is defined in the app/about.tsx file.
export default function index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:('images'),
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
    }else{ 
      alert('You did not select any image');
    }
  };
  // This function is called when the user selects an image from the image library. It uses the ImagePicker API to launch the image library and allows the user to select an image. If the user selects an image, it logs the URI of the selected image to the console. If the user cancels the selection, it shows an alert message.

  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
        </View>
        <View style={styles.footerContainer}>
          <Button theme = "primary" label="Choose a photo" onPress={pickImageAsync}/>
          <Button label = "Use this photo" />
          </View>

        </View>
        );
        // This is the main screen of the app. It uses React Native's View and Text components to create the layout and style.
}
const styles = StyleSheet.create({container: {
  flex: 1,
  backgroundColor: '#25292e',
  alignItems: 'center',
},
imageContainer: {
  flex: 1,
},

footerContainer: {
  flex: 1 / 3,
  alignItems: 'center',
},
// This is a style for the footer container. It takes up one-third of the screen height and centers its content.
});
// This is a simple style for the image container and image elements. The image container takes up the full width and height of the screen, and centers its content.
