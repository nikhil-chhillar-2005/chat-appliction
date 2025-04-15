import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
setSelectedConversation: (sConversation) => {
	set({ selectedConversation: sConversation })
} ,
	messages: [],
setMessages: (message) => set({ messages: message }),
}));

export default useConversation;