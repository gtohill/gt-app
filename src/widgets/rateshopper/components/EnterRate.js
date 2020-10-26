import React from "react";

function EnterRate(props) {
  return (
    <div>
      <h2 className="text-center">
        Find the Best Return for Your Investement!
      </h2>
      <form
        className="container border border-primary p-5"
        onSubmit={props.onSubmit}
      >
        Principle:
        <br />
        <input
          type="text"
          name="amount"
          value={props.investment}
          onChange={props.onChange}
        />
        <br />
        Term: <br />
        <input
          type="radio"
          name="term"
          value="one"
          onChange={props.onTermChange}
        />{" "}
        One Year
        <br />
        <input
          type="radio"
          name="term"
          value="two"
          onChange={props.onTermChange}
        />{" "}
        Two Year
        <br />
        <input
          type="radio"
          name="term"
          value="three"
          onChange={props.onTermChange}
        />{" "}
        Three Year
        <br />
        <input
          type="radio"
          name="term"
          value="four"
          onChange={props.onTermChange}
        />{" "}
        Four Year
        <br />
        <input
          type="radio"
          name="term"
          value="five"
          onChange={props.onTermChange}
        />{" "}
        Five Year
        <br />
        <br />
        <input className="btn-danger" type="submit" value="Discover Your ROI" />
      </form>
    </div>
  );
}

export default EnterRate;
