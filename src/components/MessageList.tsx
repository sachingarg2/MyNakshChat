// MessageList component with inverted list and swipe-to-reply
import React from 'react';
import { FlatList } from 'react-native';
import { MessageBubble } from './MessageBubble';
import { Message } from '../ChatContext';

type MessageListProps = {
    messages: Message[];
    onLongPress: (msg: Message) => void;
    onSwipeReply?: (msg: Message) => void;
};

export const MessageList = ({ messages, onLongPress, onSwipeReply }: MessageListProps) => {
    return (
        <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            renderItem={({ item }) => (
                <MessageBubble
                    message={item}
                    onLongPress={() => onLongPress(item)}
                    onSwipeReply={() => onSwipeReply?.(item)}
                />
            )}
        />
    );
};
