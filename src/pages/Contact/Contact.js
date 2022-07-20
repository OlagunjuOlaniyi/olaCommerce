import React from "react";
import Form from "../../components/Form/Form";
import { SubHeroCt } from "../../components/SubHero/style";

const Contact = () => {
  return (
    <div>
      <SubHeroCt>Contact Us</SubHeroCt>
      <main className="my-3">
        <Form />
      </main>
    </div>
  );
};

export default Contact;
