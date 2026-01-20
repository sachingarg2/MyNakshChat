// MessageBubble component with reply preview showing actual message text
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import type { Message } from '../../stores';
import { AIFeedback } from '../AIFeedback';
import { styles } from './MessageBubble.styles';

type MessageBubbleProps = {
    message: Message;
    messages: Message[]; // All messages for reply lookup
    onLongPress: () => void;
    onSwipeReply?: () => void;
};

export const MessageBubble = ({ message, messages, onLongPress, onSwipeReply }: MessageBubbleProps) => {
    const swipeableRef = useRef<Swipeable>(null);
    const isUser = message.sender === 'user';

    // Find the replied-to message
    const repliedMessage = message.replyTo
        ? messages.find((msg) => msg.id === message.replyTo)
        : null;

    const renderRightActions = () => {
        return (
            <View style={styles.replyAction}>
                <Text style={styles.replyIcon}>↩️</Text>
            </View>
        );
    };

    const handleSwipe = () => {
        if (onSwipeReply) {
            onSwipeReply();
        }
        setTimeout(() => {
            swipeableRef.current?.close();
        }, 100);
    };

    return (
        <Swipeable
            ref={swipeableRef}
            renderRightActions={!isUser ? renderRightActions : undefined}
            onSwipeableWillOpen={handleSwipe}
            overshootRight={false}
            friction={2}
        >
            <TouchableOpacity onLongPress={onLongPress} activeOpacity={0.7}>
                <View style={[styles.container, isUser ? styles.userContainer : styles.aiContainer]}>
                    <View style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}>
                        {repliedMessage && (
                            <View style={styles.replyPreview}>
                                <Text style={styles.replyText}>
                                    ↩ {repliedMessage.text.length > 40
                                        ? repliedMessage.text.substring(0, 40) + '...'
                                        : repliedMessage.text}
                                </Text>
                            </View>
                        )}
                        <Text style={[styles.text, isUser ? styles.userText : styles.aiText]}>
                            {message.text}
                        </Text>
                        <Text style={[styles.timestamp, isUser ? styles.userTimestamp : styles.aiTimestamp]}>
                            {new Date(message.timestamp).toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </Text>
                        {message.reaction && (
                            <View style={styles.reactionContainer}>
                                <Text style={styles.reaction}>{message.reaction}</Text>
                            </View>
                        )}
                    </View>
                    {!isUser && (
                        <AIFeedback
                            onFeedback={(type, chip) => console.log('Feedback:', type, chip)}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};
