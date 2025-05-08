import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};
 export default function ImageViewer({ imgSource,selectedImage}: Props) {
    // This is a functional component that takes in props and returns an Image component. It uses the Image component from the expo-image package to display an image. The imgsource prop is passed to the Image component as the source of the image. The selectedImage prop is used to determine whether to display a selected image or a default image.
    const imageSource = selectedImage ?{uri: selectedImage} : imgSource;
    // This is a conditional statement that checks if the selectedImage prop is defined. If it is, it uses the selectedImage as the source of the image. If not, it uses the imgsource prop as the source of the image.
    return < Image source={imgSource} style={styles.image} />;
    }

    const styles = StyleSheet.create({
        image: {
            width: 320,
            height: 440,
            borderRadius: 18,
        },
    });
// This is a simple component that displays an image using the Image component from the expo-image package. It takes an imgsource prop, which is the source of the image to be displayed.