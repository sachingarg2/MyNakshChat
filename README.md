# MyNaksh Chat

A modern React Native chat application with advanced features including swipe-to-reply, emoji reactions, AI feedback, and message rating.

## Features

- 🎨 **Modern UI** - Clean, WhatsApp-inspired interface
- 💬 **Chat Functionality** - Real-time messaging with user and AI messages
- ↩️ **Swipe to Reply** - Intuitive gesture-based reply system
- 😊 **Emoji Reactions** - Long-press messages to add emoji reactions
- 👍👎 **AI Feedback** - Like/dislike AI responses with detailed feedback chips
- ⭐ **Session Rating** - Rate your chat experience at the end
- 🏠 **Home/Chat Navigation** - Seamless navigation between home and chat screens
- ⌨️ **Smart Keyboard** - Auto-focus on reply with keyboard avoidance

## Tech Stack

- **React Native** 0.83.1
- **TypeScript** - Full type safety
- **React Native Gesture Handler** - Smooth swipe gestures
- **React Native Reanimated** - Performant animations
- **React Native Safe Area Context** - Proper safe area handling

## Architecture

```
src/
├── stores/           # State management (ChatContext)
├── screens/          # Screen components
│   ├── ChatScreen/
│   └── HomeScreen/
└── components/       # Reusable components
    ├── MessageList/
    ├── MessageBubble/
    ├── InputBar/
    ├── ReplyPreview/
    ├── EmojiReactionBar/
    ├── AIFeedback/
    └── EndChatOverlay/
```

Each component folder contains:
- `ComponentName.tsx` - Component logic
- `ComponentName.styles.ts` - Separated styles
- `index.ts` - Clean exports

## Getting Started

### Prerequisites

- Node.js >= 20
- iOS development setup (Xcode, CocoaPods)
- Android development setup (Android Studio, SDK)

### Installation

```bash
# Install dependencies
npm install

# iOS setup
cd ios && pod install && cd ..

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Scripts

```bash
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run start      # Start Metro bundler
npm run lint       # Run ESLint
npm run test       # Run tests
```

## Key Features Explained

### Swipe to Reply
- Swipe left on AI messages to reply
- Message automatically springs back
- Reply preview appears above input
- Shows original message text

### Emoji Reactions
- Long-press any message
- Select from 6 emojis (🙏 ✨ 🌙 ❤️ 👍 😊)
- Reactions appear on message bubble
- WhatsApp-style positioning

### AI Feedback
- Separate like (👍) and dislike (👎) buttons on AI messages
- Clicking like hides both buttons
- Clicking dislike shows feedback chips
- Chips: "Inaccurate", "Too Vague", "Too Long"
- Selecting a chip dismisses the feedback UI

### Session Rating
- End chat button in header
- Star rating overlay (1-5 stars)
- Returns to home screen after rating
- Clean state reset

## Project Structure

The project follows a clean architecture pattern with separated concerns:

- **Stores**: Context-based state management
- **Screens**: Full-screen components with navigation logic
- **Components**: Reusable UI components
- **Styles**: Separated from logic for maintainability

## License

MIT

## Author

Built for MyNaksh - Astrology Chat Application
