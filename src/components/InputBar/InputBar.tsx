// InputBar component with auto-focus on reply
import React, { useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import type { Message } from '../../stores';
import { styles } from './InputBar.styles';

type InputBarProps = {
    onSend: (text: string) => void;
    replyTo: Message | null;
};

export const InputBar = ({ onSend, replyTo }: InputBarProps) => {
    const [text, setText] = React.useState('');
    const inputRef = useRef<TextInput>(null);

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
