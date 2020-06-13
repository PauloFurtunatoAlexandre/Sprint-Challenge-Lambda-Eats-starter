import React, { useState, useEffect, Fragment } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import * as Yup from "yup";

const Pizza = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    Chicken: true,
    Bacon: false,
    Spinach: false,
    Sausage: false,
    Onions: false,
    Pineapple: false,
    special_instructions: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    size: ""
  });

  const [post, setPost] = useState();

  const sizes = ["Small", "Medium", "Large", "Extra Large"];

  const toppings = [
    "Chicken",
    "Bacon",
    "Spinach",
    "Sausage",
    "Onions",
    "Pineapple"
  ];

  const formSchema = Yup.object().shape({
    name: Yup.string().min(2, "Your name must have at least 3 characters."),
    size: Yup.mixed().oneOf(sizes)
  });

  const validateChange = e => {
    if(e.target.name === "name" || e.target.name === "size") {
      Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(isValid => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch(err => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
    }
  };

  const handleChange = e => {
    e.persist();

    setFormState({...formState, [e.target.name]: e.target.value});

    validateChange(e);
  };

  const handleSubmit = e => {
    e.persist();
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        console.log(res.data);
        setPost(res.data);
        setFormState({
          name: "",
          size: "",
          Chicken: true,
          Bacon: false,
          Spinach: false,
          Sausage: false,
          Onions: false,
          Pineapple: false,
          special_instructions: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2 className="form-title">Build your own pizza:</h2>
      <img
        className="form-image"
        src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/aexpSrzBWq7Uxh7eDKhURYHC-Vo=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/CT3VCBCJ5II6DM4QQY75UQKYRQ.jpg"
        alt=""
      />
      <Container>
        <h3 className="form-title">Build your own pizza:</h3>
        <form onSubmit={handleSubmit}>
          <Row>
            <label className="text-left mt-4" htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
              {errors.name.length > 3 ? <p className="error">{errors.name}</p> : null}
            </label>
          </Row>
          <Row>
            <label className="text-left mt-4" htmlFor="sizes">
              Size:
              <select
                id="sizes"
                value={formState.sizes}
                name="sizes"
                onChange={handleChange}
              >
                {sizes.map(size => {
                  return <option value={size}>{size}</option>;
                })}
              </select>
            </label>
          </Row>
          <Row>
            <label htmlFor="top">
              <h4 className="text-left mt-4">Toppings:</h4>
              {toppings.map(topping => {
                return (
                  <Fragment>
                    <input
                      type="checkbox"
                      name={topping}
                      checked={formState.item}
                      onChange={handleChange}
                    />
                    <label htmlFor={topping}>{topping}</label>
                    <br />
                  </Fragment>
                );
              })}
            </label>
          </Row>
          <Row>
            <label htmlFor="special_instructions">
              Special Instructions:
              <textarea
                id="special_instructions"
                name="special_instructions"
                value={formState.special_instructions}
                onChange={handleChange}
              />
            </label>
          </Row>
          <button type="submit">Order Now!</button>
        </form>
      </Container>
    </div>
  );
};

export default Pizza;
