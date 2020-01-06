import React from "react";
import Arrow from "../../../images/arrow-right.svg";

import "./form.scss";

export default () => (
    <form method="POST" action="#" name="contact-from" id="contact-form">
        <label>
            <input type="text" name="name" placeholder="Name" />
        </label>
        <label>
            <input type="text" name="phone" placeholder="Telephone" />
        </label>
        <label>
            <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
            <textarea name="message" placeholder="How can we help?" />
        </label>
        <button type="button">Send message <Arrow /></button>
    </form>
)