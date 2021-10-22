import React from "react";

function ContactDetailWithForm() {
  return (
    <>
      <div className="container">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          imperdiet, quam sed suscipit laoreet, orci nisl hendrerit nisi,
          <br />
          <br />
          ut efficitur sapien neque a sapien. Nullam in sagittis sapien, ut
          pharetra arcu. Mauris vitae nisi vitae ex posuere ultrices a congue
          ipsum.
          <br />
          <br />
          Phasellus ipsum ipsum, faucibus eu accumsan sed, dictum vel metus.
          Etiam quis arcu justo. In quis urna dolor.
          <br />
          <br />
          Nullam quis accumsan lacus, eu sagittis ante. Sed consequat porttitor
          metus, id sagittis eros sodales id.
          <br />
          <br />
          example@gmail.com
          <br />
          <br />
          Or
          <br />
          <br />
          Tel: +44 123 456 789
          <br />
          <br />
          @Baker Street 56, London.
        </h3>

        <hr style={{ color: "white", fontWeight: "700", marginTop: "5%" }} />
        <form>
          <h1>Write me directly</h1>
          <div className="name">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Lastname" />
          </div>
          <div className="userContact">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            placeholder="Tell us more"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactDetailWithForm;
