import { useNavigate } from "react-router-dom";

function CreateTicket({
                        api,
                        username,
                        tickets,
                        setTickets,
                        priority,
                        sendBy,
                      }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    const newTicket = {
      title,
      open: true,
      priority: priority.Low,
      list: [
        {
          message: description,
          time: Date.now(),
          by: sendBy.User,
        },
      ],
    };

    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);

    await fetch(api + "update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, messages: updatedTickets }),
    });

    navigate("/");
  };

  return (
    <div className="h-100 overflow-auto">
      <form className="m-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="title"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            aria-describedby="description"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateTicket;