export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Luke Spencer. All rights reserved.</p>
      </div>
    </footer>
  );
}
