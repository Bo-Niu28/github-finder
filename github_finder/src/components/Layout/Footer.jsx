function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700">
      <div>
        <p>Copyright &copy; {footerYear} All rights rescerved </p>
      </div>
    </footer>
  );
}

export default Footer;
