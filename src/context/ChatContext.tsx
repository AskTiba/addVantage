// 'use client';

// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface ChatContextType {
// 	isChatOpen: boolean;
// 	openChat: () => void;
// 	closeChat: () => void;
// 	toggleChat: () => void;
// }

// const ChatContext = createContext<ChatContextType | undefined>(undefined);

// export const ChatProvider: React.FC<{ children: ReactNode }> = ({
// 	children,
// }) => {
// 	const [isChatOpen, setIsChatOpen] = useState(false);

// 	const openChat = () => setIsChatOpen(true);
// 	const closeChat = () => setIsChatOpen(false);
// 	const toggleChat = () => setIsChatOpen((prev) => !prev);

// 	return (
// 		<ChatContext.Provider
// 			value={{
// 				isChatOpen,
// 				openChat,
// 				closeChat,
// 				toggleChat,
// 			}}>
// 			{children}
// 		</ChatContext.Provider>
// 	);
// };

// 'use client';

// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface ChatContextType {
// 	isChatOpen: boolean;
// 	openChat: () => void;
// 	closeChat: () => void;
// 	toggleChat: () => void;
// }

// const ChatContext = createContext<ChatContextType | undefined>(undefined);

// export const ChatProvider: React.FC<{ children: ReactNode }> = ({
// 	children,
// }) => {
// 	const [isChatOpen, setIsChatOpen] = useState(false);

// 	const openChat = () => setIsChatOpen(true);
// 	const closeChat = () => setIsChatOpen(false);
// 	const toggleChat = () => setIsChatOpen((prev) => !prev);

// 	return (
// 		<ChatContext.Provider
// 			value={{
// 				isChatOpen,
// 				openChat,
// 				closeChat,
// 				toggleChat,
// 			}}>
// 			{children}
// 		</ChatContext.Provider>
// 	);
// };

// export const useChatContext = () => {
// 	const context = useContext(ChatContext);
// 	if (context === undefined) {
// 		throw new Error('useChatContext must be used within a ChatProvider');
// 	}
// 	return context;
// };

// context/ChatContext.tsx
'use client';

import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useCallback,
} from 'react';

interface ChatContextType {
	isChatOpen: boolean;
	openChat: () => void;
	closeChat: () => void;
	toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isChatOpen, setIsChatOpen] = useState(false);

	const openChat = useCallback(() => {
		setIsChatOpen(true);
	}, []);

	const closeChat = useCallback(() => {
		setIsChatOpen(false);
	}, []);

	const toggleChat = useCallback(() => {
		setIsChatOpen((prev) => !prev);
	}, []);

	return (
		<ChatContext.Provider
			value={{
				isChatOpen,
				openChat,
				closeChat,
				toggleChat,
			}}>
			{children}
		</ChatContext.Provider>
	);
};

export const useChatContext = () => {
	const context = useContext(ChatContext);
	if (context === undefined) {
		throw new Error('useChatContext must be used within a ChatProvider');
	}
	return context;
};
