import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <span className="font-display text-8xl text-accent">404</span>
      <h1 className="font-display text-3xl text-primary-dark mt-4">
        Page Not Found
      </h1>
      <p className="text-muted mt-2 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
