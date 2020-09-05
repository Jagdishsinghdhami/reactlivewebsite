import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    FullName
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="mobile number"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="email"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextare1" class="form-label">
                    message
                  </label>

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextare1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>

                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">
                    submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
