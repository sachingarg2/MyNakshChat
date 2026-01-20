// ChatContext.tsx - Chat state management
import React, { createContext, useState, ReactNode } from 'react';

export type Message = {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: number;
    type: string;
    replyTo?: string;
    reaction?: string;
    feedback?: 'liked' | 'disliked';
    feedbackChip?: string;
};

type ChatContextType = {
    messages: Message[];
    addMessage: (msg: Message) => void;
    updateMessageReaction: (messageId: string, emoji: string) => void;
    rating: number | null;
    setRating: (rating: number) => void;
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

const INITIAL_MESSAGES: Message[] = [
    {
        id: '1',
        sender: 'ai',
        text: 'Welcome to MyNaksh! How can I help you today?',
        timestamp: Date.now() - 300000,
        type: 'text',
    },
    {
        id: '2',
        sender: 'user',
        text: 'I need help understanding my horoscope',
        timestamp: Date.now() - 240000,
        type: 'text',
    },
    {
        id: '3',
        sender: 'ai',
        text: 'I\'d be happy to help with your horoscope! Based on your birth chart, you have strong planetary alignments this month.',
        timestamp: Date.now() - 180000,
        type: 'text',
    },
    {
        id: '4',
        sender: 'user',
        text: 'That sounds interesting! Tell me more.',
        timestamp: Date.now() - 120000,
        type: 'text',
    },
];

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [rating, setRating] = useState<number | null>(null);

    const addMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);
    const updateMessageReaction = (messageId: string, emoji: string) => {
        setMessages((prev) =>
            prev.map((msg) =>
                msg.id === messageId ? { ...msg, reaction: emoji } : msg
            )
        );
    };

    return (
        <ChatContext.Provider
            value={{ messages, addMessage, updateMessageReaction, rating, setRating }}
        >
            {children}
        </ChatContext.Provider>
    );
};
