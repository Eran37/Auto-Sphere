import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { getDb, collections } from "../lib/mongodb";
import type { ChatMessage } from "../types/mongodb";

interface ChatForm {
  name: string;
  email: string;
  phone: string;
  problem: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState<keyof ChatForm>("name");
  const [isConversationEnded, setIsConversationEnded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<ChatForm>({
    name: "",
    email: "",
    phone: "",
    problem: "",
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Add Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && messages.length > 1) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, messages]);

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [
      ...prev,
      {
        _id: undefined,
        message: text,
        user_id: isBot ? "bot" : "user",
        created_at: new Date(),
        is_bot: isBot,
      },
    ]);
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string): boolean => {
    return /^[\d-+\s]{9,}$/.test(phone);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    try {
      const db = await getDb();
      const result = await db.collection(collections.chatMessages).insertOne({
        message: input,
        user_id: "user",
        created_at: new Date(),
        is_bot: false,
      });

      setMessages((prev) => [
        ...prev,
        {
          _id: result.insertedId,
          message: input,
          user_id: "user",
          created_at: new Date(),
          is_bot: false,
        },
      ]);

      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleInput = async (input: string) => {
    if (!input.trim() || isConversationEnded || isSending) return;

    addMessage(input, false);
    setInput("");

    const updatedFormData = { ...formData };

    switch (currentStep) {
      case "name":
        if (input.trim().length < 2) {
          addMessage("השם חייב להכיל לפחות 2 תווים. אנא נסה שוב.", true);
          return;
        }
        updatedFormData.name = input;
        setFormData(updatedFormData);
        setCurrentStep("email");
        addMessage("תודה! מה כתובת האימייל שלך?", true);
        break;

      case "email":
        if (!isValidEmail(input)) {
          addMessage(
            "כתובת האימייל לא תקינה. אנא הזן כתובת אימייל תקינה",
            true
          );
          return;
        }
        updatedFormData.email = input;
        setFormData(updatedFormData);
        setCurrentStep("phone");
        addMessage("מצוין! מה מספר הטלפון שלך?", true);
        break;

      case "phone":
        if (!isValidPhone(input)) {
          addMessage(
            "מספר הטלפון לא תקין. אנא הזן מספר טלפון תקין (לפחות 9 ספרות)",
            true
          );
          return;
        }
        updatedFormData.phone = input;
        setFormData(updatedFormData);
        setCurrentStep("problem");
        addMessage(
          "מעולה! ספר לי קצת על העסק שלך ואיך אתה חושב שאוטומציה יכולה לעזור לך?",
          true
        );
        break;

      case "problem":
        if (input.trim().length < 10) {
          addMessage("אנא פרט קצת יותר על העסק שלך (לפחות 10 תווים)", true);
          return;
        }
        updatedFormData.problem = input;
        await handleSubmit(event as React.FormEvent);
        break;
    }
  };

  const handleSend = () => {
    if (!input.trim() || isConversationEnded || isSending) return;
    handleInput(input.trim());
  };

  const resetChat = () => {
    setMessages([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      problem: "",
    });
    setCurrentStep("name");
    setIsConversationEnded(false);
    setInput("");
    setIsSending(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen && isConversationEnded) {
            resetChat();
          }
        }}
        className="fixed bottom-6 left-6 p-3 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#FF1493] text-white shadow-lg transition-all duration-300 z-50 hover:opacity-90"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-[400px] bg-[#0a192f] rounded-lg shadow-xl border border-[#1E90FF] flex flex-col z-50">
          <div className="p-3 bg-gradient-to-r from-[#1E90FF] to-[#FF1493] text-white flex items-center rounded-t-lg">
            <MessageCircle className="h-5 w-5 ml-2" />
            <span className="font-medium">Auto-Sphere צ'אט</span>
            {messages.length > 1 && (
              <span className="text-xs text-gray-100 mr-auto">
                לחץ Esc למזעור
              </span>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((message, index) => (
              <div
                key={message._id?.toString() || index}
                className={`flex ${
                  message.is_bot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.is_bot
                      ? "bg-gray-800 text-gray-100"
                      : "bg-gradient-to-r from-[#1E90FF] to-[#FF1493] text-white"
                  }`}
                >
                  {message.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t border-gray-700">
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder={
                  isConversationEnded ? "השיחה הסתיימה" : "הקלד הודעה..."
                }
                disabled={isConversationEnded || isSending}
                className="flex-1 p-2 rounded-lg bg-gray-800 text-gray-100 border-none focus:ring-1 focus:ring-[#1E90FF] placeholder-gray-500 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isConversationEnded || isSending}
                className="mr-2 px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#FF1493] text-white rounded hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSending ? "..." : "שלח"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
