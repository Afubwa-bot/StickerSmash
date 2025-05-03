import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// This is the root layout of the app. It uses the Tabs component from the expo-router package to define a tab-based navigation structure.
// The layout includes two tabs: "Home" and "About", which are defined in the app/%28tabs%29/index.tsx and app/%28tabs%29/about.tsx files respectively.
// The tabs are displayed at the bottom of the screen, and the user can switch between them by tapping on the tab icons.
export default function TabLayout() {
    return (
        // The Tabs component is used to create a tab-based navigation structure. Each tab is defined using the Tabs.Screen component.
        // The name prop specifies the name of the screen, and the options prop is used to customize the appearance and behavior of the tab.
        <Tabs
        screenOptions={{  
            tabBarActiveTintColor: '#ffd33d',
            headerStyle : { 
            backgroundColor: '#25292e' },
        // This prop is used to set the background color of the header.
        headerShadowVisible: false,
        // This prop is used to hide the shadow effect on the header.
        headerTintColor: '#fff',
        // This prop is used to set the color of the header text and icons.
        tabBarStyle: {
            backgroundColor: '#25292e',
          
        },
        // This prop is used to customize the style of the tab bar. It sets the background color, border color, position, and height of the tab bar.
        }}
        
            >    // The screenOptions prop is used to customize the appearance and behavior of the tabs.
        <Tabs.Screen name="index" options={{title: 'Home' 
        , tabBarIcon: ({ color, focused }) => (
        <Ionicons name= { focused? 'home-sharp' : 
            'home-outline'} color={color} size={24} />
        ),
        }}
        />
        
        <Tabs.Screen name="about" options = {{title: 'About',
            tabBarIcon: ({ color, focused }) => (
            <Ionicons name= { focused? 'information-circle-sharp' : 'information-circle-outline'} color={color} size={24} />
            ),
        }} />
        </Tabs>
    );
}
// This is the root layout of the app. It uses the Tabs component from the expo-router package to define a tab-based navigation structure.
// The layout includes two tabs: "Home" and "About", which are defined in the app/%28tabs%29/index.tsx and app/%28tabs%29/about.tsx files respectively.
// The tabs are displayed at the bottom of the screen, and the user can switch between them by tapping on the tab icons.
// The tabs are styled using the tabBarActiveTintColor property, which sets the color of the active tab icon to a bright yellow color (#ffd33d).
// The tabBarIcon property is used to customize the icon displayed for each tab. It uses the Ionicons component from the @expo/vector-icons package to display the appropriate icon based on whether the tab is focused or not.