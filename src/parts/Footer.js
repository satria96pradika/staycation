import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline font-weight-light">
              We kaboom your perfect vacation instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <div className="mt-2">For Beginners</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payment-method">
                  Payment Method
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <div className="mt-2">Explore Us</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Career
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div className="mt-2">Connect with Us</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622222233311">
                  +62 222 2233 311
                </Button>
              </li>
              <li className="list-group-item">
                <span>Bandung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            &copy; 2020 Staycation. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
