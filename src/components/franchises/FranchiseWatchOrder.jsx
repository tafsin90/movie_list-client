"use client";

import { useState } from "react";
import { Button, Drawer } from "@heroui/react";
import ReactMarkdown from "react-markdown";
import {
  RiBookOpenLine,
  RiEditLine,
  RiEyeLine,
  RiQuestionLine,
  RiSaveLine,
  RiCloseLine,
} from "react-icons/ri";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export default function FranchiseWatchOrder({ franchise, userId, onSaved }) {
  const [watchOrder, setWatchOrder] = useState(franchise.watchOrder || "");

  const [activeTab, setActiveTab] = useState("preview");
  const [showGuide, setShowGuide] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const hasChanges = watchOrder !== (franchise.watchOrder || "");

  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch(
        `${API}/api/franchise-folders/${franchise._id}/watch-order`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            watchOrder,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save watch order");
      }

      onSaved?.(watchOrder);

      setSuccess("Watch order saved successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Drawer>
      <Drawer.Trigger>
        <button
          type="button"
          className="flex-1 rounded-lg border border-[#e5a84b]/30 bg-white/5 px-3 py-2 text-xs text-[#e5a84b] sm:flex-none sm:px-4 sm:text-sm hover:cursor-pointer"
        >
          <span className="flex items-center justify-center gap-2">
            <RiBookOpenLine className="size-3 sm:size-4" />
            Watch Order
          </span>
        </button>
      </Drawer.Trigger>

      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog className="!bg-[#141414] !text-white">
            {/* Header */}
            <Drawer.Header className="border-b border-white/10 !px-6 !py-5">
              <div className="flex w-full items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#e5a84b]">
                    FRAME / FRANCHISE
                  </p>

                  <Drawer.Heading className="text-2xl font-semibold tracking-tight">
                    Watch Order
                  </Drawer.Heading>

                  <p className="text-sm text-gray-400">{franchise.name}</p>
                </div>

                <div className="rounded-xl border border-[#e5a84b]/20 bg-[#e5a84b]/10 p-3 text-[#e5a84b]">
                  <RiBookOpenLine size={22} />
                </div>
              </div>
            </Drawer.Header>

            {/* Body */}
            <Drawer.Body className="!px-6 !py-5">
              <div className="flex flex-col gap-5">
                {/* Description */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-gray-400">
                    Create a custom timeline for this franchise.
                  </p>

                  <p className="text-xs text-gray-500">
                    Movies, seasons, spin-offs, and crossover episodes.
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex rounded-xl border border-white/10 bg-[#1b1b1b] p-1">
                    <button
                      onClick={() => {
                        setActiveTab("preview");
                        setError("");
                        setSuccess("");
                      }}
                      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition ${
                        activeTab === "preview"
                          ? "bg-[#e5a84b] font-medium text-black"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <RiEyeLine size={16} />
                      Preview
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("write");
                        setError("");
                        setSuccess("");
                      }}
                      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition ${
                        activeTab === "write"
                          ? "bg-[#e5a84b] font-medium text-black"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <RiEditLine size={16} />
                      Write
                    </button>
                  </div>

                  {/* Markdown guide */}
                  <button
                    onClick={() => setShowGuide(!showGuide)}
                    className="flex items-center gap-1.5 text-xs text-gray-500 transition hover:text-[#e5a84b]"
                  >
                    <RiQuestionLine size={16} />
                    Formatting
                  </button>
                </div>

                {/* Formatting guide */}
                {showGuide && (
                  <div className="rounded-xl border border-[#e5a84b]/20 bg-[#e5a84b]/5 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-medium text-[#e5a84b]">
                        Markdown Guide
                      </h3>

                      <button
                        onClick={() => setShowGuide(false)}
                        className="text-gray-500 hover:text-white"
                      >
                        <RiCloseLine size={18} />
                      </button>
                    </div>

                    <div className="flex flex-col gap-3 text-xs">
                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]"># Heading</code>
                        <span className="text-gray-400">Large heading</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]">## Section</code>
                        <span className="text-gray-400">Section heading</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]">**Bold**</code>
                        <span className="text-gray-400">Important text</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]">*Italic*</code>
                        <span className="text-gray-400">Italic text</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]">- Item</code>
                        <span className="text-gray-400">Bullet list</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]">1. Item</code>
                        <span className="text-gray-400">Numbered list</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <code className="text-[#e5a84b]">[Link](url)</code>
                        <span className="text-gray-400">Hyperlink</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Editor */}
                {activeTab === "write" && (
                  <div className="flex flex-col gap-2">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] transition focus-within:border-[#e5a84b]/50">
                      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <RiEditLine className="text-[#e5a84b]" />

                          <span className="text-xs font-medium text-gray-300">
                            Editor
                          </span>
                        </div>

                        <span className="text-xs text-gray-600">Markdown</span>
                      </div>

                      <textarea
                        value={watchOrder}
                        onChange={(e) => {
                          setWatchOrder(e.target.value);
                          setSuccess("");
                        }}
                        placeholder={`# Franchise Watch Order

## Main Timeline

1. Movie / Season 1
2. Movie / Season 2
3. Movie / Season 3

## Spin-offs

1. Spin-off series
2. Special episode`}
                        className="min-h-[420px] w-full resize-y bg-transparent px-4 py-4 font-mono text-sm leading-7 text-gray-200 outline-none placeholder:text-gray-600"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Write freely. Formatting is optional.
                      </p>

                      <p className="text-xs text-gray-600">
                        {watchOrder.length} characters
                      </p>
                    </div>
                  </div>
                )}

                {/* Preview */}
                {activeTab === "preview" && (
                  <div className="min-h-[420px] rounded-xl border border-white/10 bg-[#1b1b1b] p-5">
                    {watchOrder.trim() ? (
                      <div className="prose prose-invert max-w-none text-sm">
                        <ReactMarkdown
                          components={{
                            h1: ({ children }) => (
                              <h1 className="mb-5 border-b border-white/10 pb-3 text-2xl font-bold text-white">
                                {children}
                              </h1>
                            ),

                            h2: ({ children }) => (
                              <h2 className="mb-3 mt-7 text-lg font-semibold text-[#e5a84b]">
                                {children}
                              </h2>
                            ),

                            h3: ({ children }) => (
                              <h3 className="mb-2 mt-5 text-base font-medium text-white">
                                {children}
                              </h3>
                            ),

                            p: ({ children }) => (
                              <p className="mb-4 leading-7 text-gray-400">
                                {children}
                              </p>
                            ),

                            ul: ({ children }) => (
                              <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-300">
                                {children}
                              </ul>
                            ),

                            ol: ({ children }) => (
                              <ol className="mb-5 list-decimal space-y-3 pl-5 text-gray-300">
                                {children}
                              </ol>
                            ),

                            li: ({ children }) => (
                              <li className="leading-7 marker:text-[#e5a84b]">
                                {children}
                              </li>
                            ),

                            strong: ({ children }) => (
                              <strong className="font-semibold text-white">
                                {children}
                              </strong>
                            ),

                            em: ({ children }) => (
                              <em className="text-gray-400">{children}</em>
                            ),

                            blockquote: ({ children }) => (
                              <blockquote className="my-5 border-l-2 border-[#e5a84b] pl-4 text-gray-400">
                                {children}
                              </blockquote>
                            ),

                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#e5a84b] underline underline-offset-4"
                              >
                                {children}
                              </a>
                            ),

                            code: ({ children }) => (
                              <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#e5a84b]">
                                {children}
                              </code>
                            ),

                            hr: () => <hr className="my-6 border-white/10" />,
                          }}
                        >
                          {watchOrder}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="flex min-h-[380px] flex-col items-center justify-center gap-3">
                        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                          <RiEyeLine size={24} className="text-gray-500" />
                        </div>

                        <p className="text-sm text-gray-400">
                          Nothing to preview yet
                        </p>

                        <button
                          onClick={() => setActiveTab("write")}
                          className="text-sm text-[#e5a84b] hover:underline"
                        >
                          Start writing
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Status */}
                {success && (
                  <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-sm text-green-400">
                    <span>✓</span>
                    {success}
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}
              </div>
            </Drawer.Body>

            {/* Footer */}
            <Drawer.Footer className="border-t border-white/10 !bg-[#141414] !px-6 !py-4">
              <div className="flex w-full items-center justify-between gap-3">
                <Button
                  slot="close"
                  variant="secondary"
                  className="border border-white/10 bg-[#242424] text-gray-300"
                >
                  Cancel
                </Button>

                <Button
                  onPress={handleSave}
                  isDisabled={saving || !hasChanges}
                  className={`${
                    hasChanges
                      ? "bg-[#e5a84b] text-black hover:bg-[#f0b65d]"
                      : "cursor-not-allowed bg-[#2a2a2a] text-gray-500"
                  } font-medium`}
                >
                  <RiSaveLine />

                  {saving ? "Saving..." : "Save Watch Order"}
                </Button>
              </div>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
