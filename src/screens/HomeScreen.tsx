// HomeScreen component with Open Chat button
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HomeScreenProps = {
    onOpenChat: () => void;
};

export const HomeScreen = ({ onOpenChat }: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyNaksh</Text>
            <TouchableOpacity onPress={onOpenChat} style={styles.button}>
                <Text style={styles.buttonText}>Open Chat</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0066ff',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#0066ff',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
