'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

export interface SocketMessage {
  type?: string;
  text?: string;
  senderId?: string;
  timestamp?: string;
  [k: string]: any;
}

export function useSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<SocketMessage[]>([]);
  const [connected, setConnected] = useState(false);

  const send = useCallback(
    (data: Partial<SocketMessage> & { text: string }) => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify(data));
      }
    },
    [],
  );

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(
      `${protocol}://${window.location.host}/api/socket`,
    );
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);
    ws.onerror = () => setConnected(false);
    ws.onmessage = (evt) => {
      try {
        const parsed: SocketMessage = JSON.parse(evt.data);
        setMessages((prev) => [...prev, parsed]);
      } catch {
        setMessages((prev) => [...prev, { type: 'raw', text: evt.data }]);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  return { send, messages, connected };
}
