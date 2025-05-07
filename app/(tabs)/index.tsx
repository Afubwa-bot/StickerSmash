import { Text, View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import Button from '@/components/Buttons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
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
  const [selectImage, setSelectImage] = useState<string | undefined>(undefined);
  // This is a state variable that holds the selected image. It is initialized to null, indicating that no image has been selected yet.
  // This function is called when the user selects an image from the image library. It uses the ImagePicker API to launch the image library and allows the user to select an image. If the user selects an image, it logs the URI of the selected image to the console. If the user cancels the selection, it shows an alert message.
  const pickimage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:('images'),
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }else{
      alert('You did not select any image');
    }
  };
  // This function is called when the user selects an image from the image library. It uses the ImagePicker API to launch the image library and allows the user to select an image. If the user selects an image, it logs the URI of the selected image to the console. If the user cancels the selection, it shows an alert message.

  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
        <ImageViewer imgsource={PlaceholderImage} selectedImage = {selectImage}/>
        <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <View style={styles.footerContainer}>
          <Button label = "Choose a photo" />
          <Button label = "Use this photo" />
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
footerContainer: {
  flex: 1 / 3,
  alignItems: 'center',
},
// This is a style for the footer container. It takes up one-third of the screen height and centers its content.
});
// This is a simple style for the image container and image elements. The image container takes up the full width and height of the screen, and centers its content.
