import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
        maxHeight: 100,
    },
    sendButton: {
        backgroundColor: '#0066ff',
        borderRadius: 20,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    sendText: {
        color: '#fff',
        fontWeight: '600',
    },
});
