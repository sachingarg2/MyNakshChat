import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        borderLeftColor: '#0066ff',
        paddingLeft: 8,
        marginBottom: 6,
        backgroundColor: 'rgba(0, 102, 255, 0.1)',
        padding: 6,
        borderRadius: 4,
    },
    replyText: {
        fontSize: 12,
        color: '#0066ff',
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
