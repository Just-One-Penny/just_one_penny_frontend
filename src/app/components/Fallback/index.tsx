/**
 *
 * Fallback
 *
 */
import React from 'react';

interface Props {}

export function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}
