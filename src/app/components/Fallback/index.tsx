/**
 *
 * Fallback
 *
 */
import React from 'react';
<<<<<<< HEAD
// import { theme } from 'tailwind.config';
=======
>>>>>>> e37f9572269d1b48569768006558a24df969f921

interface Props {}

export function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}
