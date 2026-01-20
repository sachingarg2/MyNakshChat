// MessageBubble component with updated AI feedback integration
import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Message } from '../ChatContext';
import { AIFeedback } from './AIFeedback';

type MessageBubbleProps = {
    message: Message;
    onLongPress: () => void;
    onSwipeReply?: () => void;
};

export const MessageBubble = ({ message, onLongPress, onSwipeReply }: MessageBubbleProps) => {
    const swipeableRef = useRef<Swipeable>(null);
    const isUser = message.sender === 'user';

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
        // Close the swipeable automatically after triggering reply
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
                        {message.replyTo && (
                            <View style={styles.replyPreview}>
                                <Text style={styles.replyText}>↩ Replying to message</Text>
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

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    userContainer: {
        alignItems: 'flex-end',
    },
    aiContainer: {
        alignItems: 'flex-start',
    },
    bubble: {
        maxWidth: '75%',
        padding: 12,
        borderRadius: 16,
        position: 'relative',
    },
    userBubble: {
        backgroundColor: '#0066ff',
        borderBottomRightRadius: 4,
    },
    aiBubble: {
        backgroundColor: '#e0e0e0',
        borderBottomLeftRadius: 4,
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
    },
    userText: {
        color: '#fff',
    },
    aiText: {
        color: '#000',
    },
    timestamp: {
        fontSize: 11,
        marginTop: 4,
    },
    userTimestamp: {
        color: 'rgba(255,255,255,0.7)',
    },
    aiTimestamp: {
        color: '#666',
    },
    reactionContainer: {
        position: 'absolute',
        bottom: -8,
        right: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    reaction: {
        fontSize: 16,
    },
    replyPreview: {
        borderLeftWidth: 3,
        borderLeftColor: '#666',
        paddingLeft: 8,
        marginBottom: 6,
    },
    replyText: {
        fontSize: 12,
        color: '#666',
        fontStyle: 'italic',
    },
    replyAction: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginVertical: 4,
    },
    replyIcon: {
        fontSize: 24,
    },
});
