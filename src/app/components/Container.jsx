function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full px-4 sm:px-6 lg:px-8 flex justify-center ${className}`}
    >
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
}

export default Container;
