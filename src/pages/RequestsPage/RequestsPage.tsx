import Navbar from "../../components/Navbar/Navbar";

export const RequestsPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          {/* <form onSubmit={(e) => handleSubmit(e)}> */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                // value={formData.username}
                // onChange={(e) => handleFieldChange(e)}
                className="mt-1 p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Last Name:
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                // value={formData.username}
                // onChange={(e) => handleFieldChange(e)}
                className="mt-1 p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.username}
                // onChange={(e) => handleFieldChange(e)}
                className="mt-1 p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Date From:
              </label>
              <input
                type="text"
                id="date_from"
                name="date_from"
                // value={formData.username}
                // onChange={(e) => handleFieldChange(e)}
                className="mt-1 p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Date To:
              </label>
              <input
                type="text"
                id="date_to"
                name="date_to"
                // value={formData.username}
                // onChange={(e) => handleFieldChange(e)}
                className="mt-1 p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Status:
              </label>
              <input
                type="text"
                id="status"
                name="status"
                // value={formData.username}
                // onChange={(e) => handleFieldChange(e)}
                className="mt-1 p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-yellow-300 text-black p-3 font-light rounded mb-4"
              >
                Clear
              </button>
              <br />
              <button
                type="submit"
                className="bg-yellow-300 text-black p-3 font-light rounded"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
