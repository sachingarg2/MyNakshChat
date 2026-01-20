import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
