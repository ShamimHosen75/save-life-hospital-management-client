import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const EditNurse = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate= useNavigate();
  const [nurseForm, SetNurseForm] = useState({
    Name: '',
    Designation: "",
    Department: "",
    Shift: "",
    Education: "",
    Photo: "",
    Description: ""
  });

  useEffect(() => {
    fetch(`http://localhost:5000/nurse/${id}`)
      .then((res) => res.json())
      .then(data=>
        { 
          SetNurseForm({    
            Name: data.Name,
            Designation: data.Designation,
            Department: data.Department,
            Shift: data.Shift,
            Education: data.Education,
            Photo: data.Photo,
            Description:data.Description
        })
      }
    )
    },[]); 

  const inputClass =
    "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparenta";
    
  const onSubmit = () => {
    console.log({...nurseForm, edititem: true});
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/nurse/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...nurseForm }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // navigate(from);
      });
  };

  const onDelete = () => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/nurse/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate('/', { replace: true })
      });
      
  }
  
  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[150px] container mx-auto">
        <div class="relative mx-auto w-[50vw]">
          <h1 className="text-4xl font-extrabold py-10">
            Register as a Nurse
          </h1>

          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Name}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Name: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
                Designation
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Designation}
                
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Designation: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Department
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Department}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Department: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Shift
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Shift}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Shift: e.target.value});
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Education
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Education}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Education: e.target.value})
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Photo
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Photo}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Photo: e.target.value});
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Description
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Description}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Description: e.target.value})
                }}
              />
            </div>

            <br />
            <div className="d-flex ms-auto">
              <button
                href="#!"
                className="btn btn-primary"
                type="submit"
                value="Add Product"
              >
                Submit
              </button>
              <button
                href="#!"
                type="button"
                className="btn bg-red-500 ml-2 hover:bg-yellow-600"
                onClick={()=>(onDelete())}
                value="Add Product"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditNurse;
