// MessageList component
import React from 'react';
import { FlatList } from 'react-native';
import type { Message } from '../../stores';
import { MessageBubble } from '../MessageBubble';
import { styles } from './MessageList.styles';

type MessageListProps = {
    messages: Message[];
    onLongPress: (msg: Message) => void;
    onSwipeReply?: (msg: Message) => void;
};

export const MessageList = ({ messages, onLongPress, onSwipeReply }: MessageListProps) => {
    return (
        <FlatList
            style={styles.list}
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            renderItem={({ item }) => (
                <MessageBubble
                    message={item}
                    messages={messages}
                    onLongPress={() => onLongPress(item)}
                    onSwipeReply={() => onSwipeReply?.(item)}
                />
            )}
        />
    );
};
