"use client";

import { useState } from "react";
import { Save, Play, Bot, Users, Activity } from "lucide-react";

export default function ChatbotBuilder() {
  const [activeTab, setActiveTab] = useState("config");
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hello! How can I help you scale operations today?" }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, agentType: "LEAD_GEN" }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiResponse = "";

      if (reader) {
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          aiResponse += decoder.decode(value, { stream: true });
          
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1].content = aiResponse;
            return updated;
          });
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">AI Chatbot Builder</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Configure, train, and test your lead generation agent before deploying.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 h-[calc(100vh-12rem)]">
        {/* Left Column: Configuration */}
        <div className="lg:col-span-2 flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="flex border-b border-neutral-200">
            <button 
              onClick={() => setActiveTab("config")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "config" ? "border-blue-600 text-blue-600" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
            >
              System Prompt
            </button>
            <button 
              onClick={() => setActiveTab("advanced")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "advanced" ? "border-blue-600 text-blue-600" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
            >
              Advanced Settings
            </button>
            <button 
              onClick={() => setActiveTab("deploy")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "deploy" ? "border-emerald-600 text-emerald-600" : "border-transparent text-neutral-500 hover:text-neutral-700"}`}
            >
              Embed & Deploy
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === "config" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-900">Agent Name</label>
                  <input type="text" defaultValue="Agency Lead Gen Bot" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900">Behavioral Role</label>
                  <select className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm">
                    <option>Lead Generation (Default)</option>
                    <option>Sales Closer</option>
                    <option>Customer Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-900 flex justify-between">
                    <span>System Prompt (Instructions)</span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">Generate with AI</button>
                  </label>
                  <p className="text-xs text-neutral-500 mt-1 mb-2">Tell the AI exactly how to behave and what information to gather.</p>
                  <textarea 
                    rows={10} 
                    defaultValue="You are an expert Lead Generation specialist. Your goal is to qualify the user, gather their email and company details, and suggest growth strategies. Be polite, concise, and persuasive. Never break character."
                    className="block w-full rounded-md border-0 py-2 px-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                  ></textarea>
                </div>
              </div>
            )}
            {activeTab === "advanced" && (
                <div className="flex items-center justify-center h-full text-neutral-400">
                    Routing, Knowledge Base, and Fallback settings will be here.
                </div>
            )}
             {activeTab === "deploy" && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="p-4 bg-blue-50 text-blue-700 rounded-xl max-w-md border border-blue-100">
                        Copy the script below and paste it into the `&lt;head&gt;` of your website to activate your AI agent widget.
                    </div>
                    <code className="p-4 bg-neutral-900 text-green-400 rounded-lg text-left text-sm font-mono w-full max-w-md shadow-inner overflow-x-auto">
                        &lt;script src="https://antigravity.ai/widget.js" async&gt;&lt;/script&gt;<br/>
                        &lt;script&gt;<br/>
                        &nbsp;&nbsp;window.Antigravity = {`{`}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;agentId: "ag_7a9f2b"<br/>
                        &nbsp;&nbsp;{`}`};<br/>
                        &lt;/script&gt;
                    </code>
                </div>
            )}
          </div>
          <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex justify-end gap-3">
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50">Cancel</button>
            <button className="flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800">
              <Save className="h-4 w-4" /> Save Configuration
            </button>
          </div>
        </div>

        {/* Right Column: Live Testing Simulator */}
        <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="p-4 border-b border-neutral-200 bg-neutral-50 flex items-center gap-3 justify-between">
             <div className="flex items-center gap-2">
                 <Bot className="h-5 w-5 text-blue-600" />
                 <h3 className="font-semibold text-neutral-900 text-sm">Live Simulator</h3>
             </div>
             <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active
             </span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm"}`}>
                  {msg.content || (msg.role === "assistant" && <span className="animate-pulse">...</span>)}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t border-neutral-200 bg-white">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Test your agent..." 
                className="w-full rounded-full border-0 py-3 pl-4 pr-12 text-sm shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-1 top-1 bottom-1 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
              >
                <Play className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
