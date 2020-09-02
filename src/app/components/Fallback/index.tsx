/**
 *
 * Fallback
 *
 */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { theme } from 'tailwind.config';

interface Props {}

export function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}
