// InputBar component with auto-focus on reply
import React, { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Keyboard } from 'react-native';
import { Message } from '../stores/ChatContext';

type InputBarProps = {
    onSend: (text: string) => void;
    replyTo: Message | null;
};

export const InputBar = ({ onSend, replyTo }: InputBarProps) => {
    const [text, setText] = React.useState('');
    const inputRef = useRef<TextInput>(null);

    // Auto-focus when reply preview appears
    useEffect(() => {
        if (replyTo) {
            inputRef.current?.focus();
        }
    }, [replyTo]);

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Type a message..."
                value={text}
                onChangeText={setText}
                multiline
                maxLength={500}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
        maxHeight: 100,
    },
    sendButton: {
        backgroundColor: '#0066ff',
        borderRadius: 20,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    sendText: { color: '#fff', fontWeight: '600' },
});
