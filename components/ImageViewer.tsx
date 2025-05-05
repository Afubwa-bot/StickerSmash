import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgsource: ImageSource;
};
 export default function ImageViewer({ imgsource }: Props) {
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