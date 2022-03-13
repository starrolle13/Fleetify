import { useState, useRef, useEffect } from 'react';

export default function Contact({
  center,
  zoom,
  mapId,
  mapTypeId
}: {
  center: { lat: 41.44417, lng: -90.15196 },
  zoom: 12,
  mapId: 'fbe3afe67839325',
  mapTypeId: 'hybrid'
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom
    });
  });

  const initialState = {
    name: '',
    email: '',
    message: ''
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  // Event Handler: a callback function to
  // be run when the event is observed
  const handleSubmit = (event) => {
    // we always need to stop the browser
    // from submitting the form or the page
    // will be refreshed.
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(initialState);
  };

  // Event Listener: tells the browser
  // which event to listen for on which
  // element and what to do when the event
  // happens
  <form onSubmit={handleSubmit}></form>;
  return (
    <div className="contactContainer">
      <div className="formBox">
        <div className="form">
          <form onSubmit={handleSubmit} className="formItems">
            {/* <label htmlFor="email">Name:</label> */}
            <input
              placeholder="Name"
              type="text"
              id="name"
              onChange={handleChange}
              value={formState.name}
              className="name"
            />
            {/* <label htmlFor="email">Email:</label> */}
            <input
              placeholder="Email"
              type="text"
              id="email"
              onChange={handleChange}
              value={formState.email}
              className="email"
            />
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.message}
              className="message"
            ></textarea>
            <button type="submit" className="submitButton">
              Send
            </button>
          </form>
        </div>
        <div className="mapApi" ref={ref}></div>
      </div>
    </div>
  );
}
