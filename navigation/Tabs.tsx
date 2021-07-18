import React, { ReactNode } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import { COLORS, FONTS, icons } from "../constants"
import { BottomRootNavigator } from '../types';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator<BottomRootNavigator>()

export default function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 70
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarIcon: ({ focused }) => <TabIcon source={icons.home} focused={focused} text="HOME" /> }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabIcon
                            source={icons.pie_chart}
                            focused={focused}
                            text="PORTFOLIO"
                        />
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.transaction}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: COLORS.white }}
                        />),
                    tabBarButton: (props: any) => <TabBarCustomButton {...props} />
                }}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabIcon
                            source={icons.line_graph}
                            focused={focused}
                            text="PRICES"
                        />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabIcon
                            source={icons.settings}
                            focused={focused}
                            text="SETTINGS"
                        />
                }}
            />
        </Tab.Navigator>
    )
}

type TabIconProps = {
    focused: boolean;
    source: any;
    text: string;
}

function TabIcon({ focused, source, text }: TabIconProps) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={source}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: focused ? COLORS.primary : COLORS.black }}
            />
            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>
                {text}
            </Text>
        </View>
    )
}

type TabBarCustomButtonProps = {
    children: ReactNode;
    onPress: ((e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void) | undefined
}

function TabBarCustomButton({ children, onPress }: any) {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}

            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{ width: 70, height: 70, borderRadius: 35 }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})