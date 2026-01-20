// EndChatOverlay component with star rating and TypeScript types
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

type EndChatOverlayProps = {
    visible: boolean;
    onClose: () => void;
    onSubmitRating: (rating: number) => void;
};

export const EndChatOverlay = ({ visible, onClose, onSubmitRating }: EndChatOverlayProps) => {
    const [rating, setRating] = useState(5);

    const handleSubmit = () => {
        onSubmitRating(rating);
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Thank You!</Text>
                    <Text style={styles.message}>Please rate your chat experience</Text>

                    <View style={styles.starsContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <TouchableOpacity
                                key={star}
                                onPress={() => setRating(star)}
                                style={styles.starButton}
                            >
                                <Text style={styles.star}>
                                    {star <= rating ? '⭐️' : '☆'}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
    message: { marginBottom: 16, textAlign: 'center' },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 8,
    },
    starButton: {
        padding: 4,
    },
    star: {
        fontSize: 32,
    },
    button: {
        backgroundColor: '#0066ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 12,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    cancelButton: { padding: 8 },
    cancelText: { color: '#666', fontSize: 14 },
});
