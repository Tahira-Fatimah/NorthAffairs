export default function Error({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <p className="text-destructive mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-primary text-white rounded-lg"
      >
        Retry
      </button>
    </div>
  );
}
