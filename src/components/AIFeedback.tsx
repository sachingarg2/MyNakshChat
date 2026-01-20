// AIFeedback component with separate like/dislike icons
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type AIFeedbackProps = {
    onFeedback?: (type: 'liked' | 'disliked', chip?: string) => void;
};

export const AIFeedback = ({ onFeedback }: AIFeedbackProps) => {
    const [feedbackGiven, setFeedbackGiven] = useState(false);
    const [showChips, setShowChips] = useState(false);

    const handleLike = () => {
        setFeedbackGiven(true);
        onFeedback?.('liked');
    };

    const handleDislike = () => {
        setShowChips(true);
    };

    const handleChipSelect = (chip: string) => {
        setFeedbackGiven(true);
        setShowChips(false);
        onFeedback?.('disliked', chip);
    };

    if (feedbackGiven) {
        return null;
    }

    return (
        <View style={styles.container}>
            {!showChips ? (
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
                        <Text style={styles.icon}>👍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDislike} style={styles.iconButton}>
                        <Text style={styles.icon}>👎</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.chipsContainer}>
                    {['Inaccurate', 'Too Vague', 'Too Long'].map((chip) => (
                        <TouchableOpacity
                            key={chip}
                            onPress={() => handleChipSelect(chip)}
                            style={styles.chip}
                        >
                            <Text style={styles.chipText}>{chip}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    iconButton: {
        padding: 4,
    },
    icon: {
        fontSize: 18,
    },
    chipsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 4,
        gap: 6,
    },
    chip: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    chipText: {
        fontSize: 12,
        color: '#333',
    },
});
