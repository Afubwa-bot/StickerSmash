import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgsource: ImageSource;
  selectedImage?: string;
};
 export default function ImageViewer({ imgsource, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgsource;
    // This is a functional component that takes in props and returns an Image component. It uses the Image component from the expo-image package to display an image. The imgsource prop is passed to the Image component as the source of the image. The selectedImage prop is used to determine whether to display a selected image or a default image.
    
    return < Image source={imgsource} style={styles.image} />;
    }

    const styles = StyleSheet.create({
        image: {
            width: 320,
            height: 440,
            borderRadius: 18,
        },
    });
// This is a simple component that displays an image using the Image component from the expo-image package. It takes an imgsource prop, which is the source of the image to be displayed.