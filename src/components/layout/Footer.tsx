
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} GraphViz. An educational tool for graph algorithms.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
