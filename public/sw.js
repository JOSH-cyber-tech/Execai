self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'ExecAI', {
      body: data.body || data.message || 'You have an ExecAI update.',
      icon: '/favicon.ico',
      badge: '/favicon.ico'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
