import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    userName: "",
    remark: "",
    rating: 5,
  });

  let handelChangeData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ userName: "", remark: "", rating: "" });
  };

  return (
    <form onSubmit={handelSubmit}>
      <h2>Comment Form!</h2>
      <br />
      <br />
      <label htmlFor="username">User Name</label> &nbsp; : &nbsp; &nbsp;
      <input
        type="text"
        id="username"
        placeholder="Enter Your Name"
        value={formData.userName}
        name="userName"
        onChange={handelChangeData}
      />
      <br />
      <br />
      <label htmlFor="comment">Remark</label> &nbsp; : &nbsp; &nbsp;
      <textarea
        id="comment"
        placeholder="Add Your Remarks "
        value={formData.remark}
        name="remark"
        onChange={handelChangeData}
      ></textarea>
      <br />
      <br />
      <label htmlFor="rating">Rating</label> &nbsp; : &nbsp; &nbsp;
      <input
        id="rating"
        type="number"
        min={1}
        max={5}
        placeholder="Rating"
        value={formData.rating}
        name="rating"
        onChange={handelChangeData}
      />
      <br />
      <br />
      <button>Add Comments</button>
    </form>
  );
}
