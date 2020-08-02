/**
 *
 * Fallback
 *
 */
import React from 'react';
import { theme } from 'tailwind.config';

interface Props {}

export function Fallback({ error }) {
  return (
    <div
      role="alert"
      css={{
        color: theme.primary,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}
