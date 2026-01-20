// ChatScreen - Main chat interface
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ChatContext, type Message } from '../../stores';
import {
    MessageList,
    InputBar,
    ReplyPreview,
    EmojiReactionBar,
    EndChatOverlay,
} from '../../components';
import { HomeScreen } from '../HomeScreen';
import { styles } from './ChatScreen.styles';

export const ChatScreen = () => {
    const { messages, addMessage, updateMessageReaction, setRating } = useContext(ChatContext)!;
    const [showEmojiBar, setShowEmojiBar] = useState(false);
    const [showEndOverlay, setShowEndOverlay] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [currentScreen, setCurrentScreen] = useState<'home' | 'chat'>('home');
    const [replyTo, setReplyTo] = useState<Message | null>(null);

    const handleSend = (text: string) => {
        const newMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text,
            timestamp: Date.now(),
            type: 'text',
            replyTo: replyTo?.id,
        };
        addMessage(newMsg);
        setReplyTo(null);
    };

    const handleLongPress = (msg: Message) => {
        setSelectedMessage(msg);
        setShowEmojiBar(true);
    };

    const handleSwipeReply = (msg: Message) => {
        setReplyTo(msg);
    };

    const handleSelectEmoji = (emoji: string) => {
        if (selectedMessage) {
            updateMessageReaction(selectedMessage.id, emoji);
        }
        setShowEmojiBar(false);
        setSelectedMessage(null);
    };

    const handleEndChat = () => setShowEndOverlay(true);

    const handleSubmitRating = (rating: number) => {
        setRating(rating);
        setShowEndOverlay(false);
        setReplyTo(null);
        setCurrentScreen('home');
    };

    const handleOpenChat = () => {
        setCurrentScreen('chat');
        setReplyTo(null);
    };

    if (currentScreen === 'home') {
        return <HomeScreen onOpenChat={handleOpenChat} />;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
                >
                    <View style={styles.header}>
                        <Text style={styles.title}>MyNaksh Chat</Text>
                        <TouchableOpacity onPress={handleEndChat}>
                            <Text style={styles.endButton}>End Chat</Text>
                        </TouchableOpacity>
                    </View>

                    <MessageList
                        messages={messages}
                        onLongPress={handleLongPress}
                        onSwipeReply={handleSwipeReply}
                    />

                    {replyTo && (
                        <ReplyPreview replyToMessage={replyTo} onCancel={() => setReplyTo(null)} />
                    )}

                    <InputBar onSend={handleSend} replyTo={replyTo} />

                    {showEmojiBar && (
                        <EmojiReactionBar
                            onSelect={handleSelectEmoji}
                            onClose={() => setShowEmojiBar(false)}
                        />
                    )}

                    <EndChatOverlay
                        visible={showEndOverlay}
                        onClose={() => setShowEndOverlay(false)}
                        onSubmitRating={handleSubmitRating}
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};
