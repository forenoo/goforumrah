import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footer-link";
import Button from "@/components/ui/button";
import Logo from "@/public/img/logo.svg";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper max-container padding-container">
        <div className="menus">
          <div className="menus__item">
            <h5 className="menus__item-title">Explore</h5>
            <ul className="menus__list">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.id} className="menus__list-item">
                  <Link
                    href={link.href}
                    className="base base--regular menus__link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="menus__item">
            <h5 className="menus__item-title">About Us</h5>
            <ul className="menus__list">
              {FOOTER_LINKS.aboutUs.map((link) => (
                <li key={link.id} className="menus__list-item">
                  <Link
                    href={link.href}
                    className="base base--regular menus__link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="menus__item">
            <h5 className="menus__item-title">Helps</h5>
            <ul className="menus__list">
              {FOOTER_LINKS.helps.map((link) => (
                <li key={link.id} className="menus__list-item">
                  <Link
                    href={link.href}
                    className="base base--regular menus__link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="menus__item">
            <h5 className="menus__item-title menus__item-title--newsletter">
              Join Our Newsletter
            </h5>
            <p className="base base--regular menus__item-description">
              Sign up and we&apos;ll send the best deals to you
            </p>
            <form action="#" className="menus__item-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="menus__item-form-input"
              />
              <Button className="btn--primary btn--small base base--bold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="content">
          <div className="logo">
            <Logo className="logo__img" />
            <p className="copyright base base--regular">
              &copy; 2022 Goforumrah LLC All rights reserved.
            </p>
          </div>
          <div className="social-media">
            {FOOTER_LINKS.socialMedia.map((item) => (
              <button key={item.id} className="social-media__item">
                <item.icon />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
