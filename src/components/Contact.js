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
    issueType: '',
    subject: '',
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="issueType">Type of Issue:</label>
            <select
              id="issueType"
              onChange={handleChange}
              value={formState.issueType}
            >
              <option value="outage">Service Outage</option>
              <option value="billing">Billing</option>
              <option value="cancel">Cancel Service</option>
            </select>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              onChange={handleChange}
              value={formState.subject}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formState.message}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="mapApi" ref={ref} id="map"></div>
      </div>
    </div>
  );
}
