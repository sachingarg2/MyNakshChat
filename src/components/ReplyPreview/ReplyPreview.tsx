// ReplyPreview component with improved styling
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Message } from '../ChatContext';

type ReplyPreviewProps = {
    replyToMessage: Message | null;
    onCancel: () => void;
};

export const ReplyPreview = ({ replyToMessage, onCancel }: ReplyPreviewProps) => {
    if (!replyToMessage) return null;

    const truncatedText = replyToMessage.text.length > 50
        ? replyToMessage.text.substring(0, 50) + '...'
        : replyToMessage.text;

    return (
        <View style={styles.container}>
            <View style={styles.leftBorder} />
            <View style={styles.content}>
                <Text style={styles.label}>Replying to</Text>
                <Text style={styles.message} numberOfLines={1}>{truncatedText}</Text>
            </View>
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
                <Text style={styles.cancelIcon}>✕</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f0f9ff',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
    },
    leftBorder: {
        width: 3,
        height: '100%',
        backgroundColor: '#0066ff',
        borderRadius: 2,
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0066ff',
        marginBottom: 2,
    },
    message: {
        fontSize: 14,
        color: '#333',
    },
    cancelButton: {
        padding: 8,
    },
    cancelIcon: {
        fontSize: 18,
        color: '#666',
    },
});
