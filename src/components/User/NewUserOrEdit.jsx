import { useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";

const NewUserOrEdit = () => {
  const navigate = useNavigate();
  const user = useLoaderData();
  const { id } = useParams();
  const route = window.location.pathname.split("/").pop();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const roles = ["Job Post Manager", "Account Manager", "JD Manager"];

  useEffect(() => {
    if (user && route !== "new") {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setRole(user.role);
    }
  }, [user, route]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (route === "new") {
      console.log("Creating new user:", { name, email, phone, role });
    } else {
      console.log("Updating user:", { id, name, email, phone, role });
    }
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-10">
        <div className="flex w-full justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#111827]">
              {route === "new" ? "Add New User" : `Edit User ${id}`}
            </h1>
            <p className="mt-2 mb-4">
              This information will help you give access to other people in your
              team.
            </p>
            <hr />
          </div>
        </div>
        <div className="flex flex-col w-full text-[#374151]">
          <div className="p-6 flex border-b-2 border-[#E5E7EB]">
            <p className="w-[40%] font-medium">Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="p-6 flex border-b-2 border-[#E5E7EB]">
            <p className="w-[40%] font-medium">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="p-6 flex border-b-2 border-[#E5E7EB]">
            <p className="w-[40%] font-medium">Phone Number</p>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="p-6 flex border-b-2 border-[#E5E7EB]">
            <p className="w-[40%] font-medium">Assign Role</p>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              {roles.map((roleOption, index) => (
                <option key={index} value={roleOption}>
                  {roleOption}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="h-[50px] w-[114px] border border-[#D1D5DB] text-[#374151] font-medium rounded-[6px] flex justify-center items-center gap-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-[50px] w-[114px] border border-[#D1D5DB] bg-blue-700 text-[#f4f7fd] font-medium rounded-[6px] flex justify-center items-center gap-3"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserOrEdit;
