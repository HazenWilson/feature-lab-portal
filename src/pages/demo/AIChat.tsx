
import React, { useState } from "react";
import { Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AIChatSidebar } from "./components/AIChatSidebar";

// Mock data for previous chats
const mockPreviousChats = [
  { id: "chat1", title: "Portfolio Analysis", date: "Today" },
  { id: "chat2", title: "Market Trends", date: "Yesterday" },
  { id: "chat3", title: "Stock Recommendations", date: "Apr 10" },
  { id: "chat4", title: "Risk Assessment", date: "Apr 8" },
  { id: "chat5", title: "Investment Strategy", date: "Apr 5" },
];

// Mock data for chat messages
const mockChatMessages = [
  { id: "1", role: "bot", content: "Hello, I'm your AI assistant. How can I help you with your investments today?" },
  { id: "2", role: "user", content: "Can you analyze the tech sector for me?" },
  { id: "3", role: "bot", content: "The tech sector has been showing mixed signals lately. Major companies like Apple and Microsoft have reported strong earnings, while smaller tech firms are facing challenges due to supply chain issues and increasing competition. Would you like me to dive deeper into any specific aspect of the tech sector?" }
];

const AIChat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("chat1");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(mockChatMessages);
  const [previousChats, setPreviousChats] = useState(mockPreviousChats);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    // Add user message
    const newUserMessage = {
      id: String(Date.now()),
      role: "user",
      content: message
    };
    
    setChatMessages([...chatMessages, newUserMessage]);
    setMessage("");
    
    // Mock bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botResponse = {
        id: String(Date.now() + 1),
        role: "bot",
        content: `I understand you're asking about "${message}". This is a placeholder response. When we integrate the backend, this will provide a real AI-generated answer.`
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  const handleNewChat = () => {
    // Create a new chat
    const newChatId = `chat${previousChats.length + 1}`;
    const newChat = {
      id: newChatId,
      title: "New Chat",
      date: "Just now"
    };
    
    setPreviousChats([newChat, ...previousChats]);
    setCurrentSection(newChatId);
    setChatMessages([{
      id: String(Date.now()),
      role: "bot",
      content: "How can I help you today?"
    }]);
  };
  
  const handleSelectChat = (chatId: string) => {
    setCurrentSection(chatId);
    // In a real app, we would load the chat messages for the selected chat
    // For now, we'll just reset to the mock messages
    setChatMessages(mockChatMessages);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AIChatSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        previousChats={previousChats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />

      <div 
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex max-w-[80%] rounded-lg p-4 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-md border bg-background">
                        {msg.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t bg-background p-4">
          <div className="mx-auto max-w-4xl">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
