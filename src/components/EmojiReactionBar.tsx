// EmojiReactionBar component with improved positioning and animations
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';

const emojis = ['🙏', '✨', '🌙', '❤️', '👍', '😊'];

type EmojiReactionBarProps = {
    onSelect: (emoji: string) => void;
    onClose: () => void;
};

export const EmojiReactionBar = ({ onSelect, onClose }: EmojiReactionBarProps) => {
    return (
        <Modal transparent visible animationType="none">
            <Pressable style={styles.backdrop} onPress={onClose}>
                <Animated.View
                    entering={SlideInDown.duration(250)}
                    style={styles.container}
                >
                    {emojis.map((emoji) => (
                        <TouchableOpacity
                            key={emoji}
                            onPress={() => onSelect(emoji)}
                            style={styles.emojiButton}
                        >
                            <Text style={styles.emoji}>{emoji}</Text>
                        </TouchableOpacity>
                    ))}
                </Animated.View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    emojiButton: {
        padding: 8,
    },
    emoji: {
        fontSize: 32,
    },
});
