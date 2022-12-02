import { A, ErrorBoundary } from "solid-start";

export default function () {
  return (
    <ErrorBoundary fallback={() => <p>Error</p>}>
      <div>
        <h1>Nested</h1>
        <A href="/">Back to home</A>
      </div>
    </ErrorBoundary>
  );
}
