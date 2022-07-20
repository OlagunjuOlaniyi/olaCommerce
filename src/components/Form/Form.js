import React from "react";
import { ButtonClick } from "../Button/Button";
import { FormCt } from "./Style";

const Form = () => {
  return (
    <FormCt>
      <form>
        <h5>Send Us A Message!</h5>
        <div className="mb-2 mt-3">
          <label for="name" className="form-label">
            Name:
          </label>
          <input type="name" className="form-control" id="name" name="name" />
        </div>
        <div className="mb-2 mt-3">
          <label for="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>

        <div className="mb-2 mt-3">
          <label for="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="6"
          ></textarea>
        </div>

        <ButtonClick type="submit">Send Message</ButtonClick>
      </form>
    </FormCt>
  );
};

export default Form;
