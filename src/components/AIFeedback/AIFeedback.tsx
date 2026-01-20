// AIFeedback component with separate like/dislike icons
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './AIFeedback.styles';

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
