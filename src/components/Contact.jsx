import React, { useEffect } from "react";
import "../styles/Contact.css";

function Contact() {

    useEffect(() => {
        document.title = "Tanishka | Contact";
    }, []);

    return (
        <div className="scrollable-container">
            <div className="contact">
                <div className="contact-title">
                    <h2>Contact</h2>
                </div>
                <hr className="separator" />
                <div className="contact-content">
                    <div className="contact-left">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h6>Mail</h6>
                                    </td>
                                    <td>
                                        <div className="link-underline">
                                            <div className="link">
                                                <a href="mailto:tanishkasingh2004@gmail.com"
                                                    target="_blank" rel="noreferrer">↗ tanishkasingh2004@gmail.com</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="contact-right">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h6>Social medias</h6>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <div className="link-underline">
                                                    <div className="link">
                                                        <a href="https://github.com/taniishkaaa"
                                                            target="_blank" rel="noreferrer">↗ GitHub</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="link-underline">
                                                    <div className="link">
                                                        <a href="https://www.linkedin.com/in/tanishka-singh-a42571228/"
                                                            target="_blank" rel="noreferrer">↗ LinkedIn</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="noise"></div>
        </div>
    );
}

export default Contact;
