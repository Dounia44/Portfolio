import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_7ge7e3q",
        "template_43gasdx",
        formRef.current,
        "ujfmjDN2Av3BN_KYD",
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("error");
          console.error(error);
          setTimeout(() => setStatus(""), 5000);
        },
      );
  };
  return (
    <section
      id="contact"
      className="py-20 lg:py-40 px-6 bg-linear-to-r from-blue-50 to-purple-50"
    >
      <div className="container mx-auto text-center mb-12">
        <h2>Me Contacter</h2>
        <p>Une opportunité ou simplement envie d’échanger ? Contactez-moi</p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-gray-50 rounded-2xl max-w-4xl mx-auto p-10 md:p-12 shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            id="name"
            name="user_name"
            type="text"
            placeholder="Entrez votre nom"
            className="form-input"
            required
            autoComplete="name"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            id="email"
            name="user_email"
            type="email"
            placeholder="Saisissez votre adresse email"
            className="form-input"
            required
            autoComplete="email"
            disabled={status === "sending"}
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Saisissez votre message"
            rows="4"
            className="form-textarea"
            required
            autoComplete="off"
            disabled={status === "sending"}
          />
        </div>

        {status === "success" && (
          <p className="text-green-700 text-center">
            Le message a été bien envoyé !
          </p>
        )}

        {status === "error" && (
          <p className="text-red-700 text-center">Erreur lors de l'envoi.</p>
        )}

        <div className="text-center">
          <Button type="submit" disabled={status === "sending"}>
            Envoyer
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
