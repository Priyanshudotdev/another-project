export const config = {
  runtime: 'edge',
};

// Maintain a global set of clients (Edge runtime persists per instance until evicted)
const clients: Set<WebSocket> =
  (globalThis as any).__WS_CLIENTS__ || new Set<WebSocket>();
(globalThis as any).__WS_CLIENTS__ = clients;

function broadcast(data: any, except?: WebSocket) {
  const payload = typeof data === 'string' ? data : JSON.stringify(data);
  for (const client of clients) {
    if (client !== except && client.readyState === client.OPEN) {
      try {
        client.send(payload);
      } catch {
        /* ignore */
      }
    }
  }
}

export async function GET(req: Request) {
  if (req.headers.get('upgrade') !== 'websocket') {
    return new Response('Expected websocket', { status: 400 });
  }
  const { socket, response } = (req as any).webSocket
    ? { socket: (req as any).webSocket, response: new Response(null) }
    : (globalThis as any).Deno?.upgradeWebSocket
    ? (globalThis as any).Deno.upgradeWebSocket(req)
    : (function () {
        throw new Error('WebSocket upgrade not supported in this environment');
      })();

  socket.onopen = () => {
    clients.add(socket);
    const welcome = {
      type: 'message',
      text: 'Welcome to WebSocket Echo Server!',
      senderId: 'system',
      timestamp: new Date().toISOString(),
    };
    try {
      socket.send(JSON.stringify(welcome));
    } catch {
      /* ignore */
    }
  };

  socket.onmessage = (evt: MessageEvent) => {
    let data: any = evt.data;
    try {
      data = JSON.parse(evt.data as string);
    } catch {
      /* keep raw */
    }
    if (data && typeof data === 'object' && data.text) {
      const echo = {
        type: 'message',
        text: `Echo: ${data.text}`,
        senderId: 'system',
        timestamp: new Date().toISOString(),
      };
      try {
        socket.send(JSON.stringify(echo));
      } catch {
        /* ignore */
      }
    }
  };

  socket.onclose = () => {
    clients.delete(socket);
  };
  socket.onerror = () => {
    clients.delete(socket);
  };

  return response;
}
