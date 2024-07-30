import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import axios from "axios";
import config from '../../../config'
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { fetchRole } from "../../../redux/action/role/role";
function AddRole(props) {
  const [modal, SetModal] = useState(false)
  const dispatch = useDispatch()
  const { loading, userInfo, error } =
    useSelector((store) => store.userInfo) || " ";

  const checkrole = userInfo?.payload?.company
  var token = localStorage.getItem("token");

  const permissionOptions = [
    { value: "read", label: "Read" },
    { value: "create", label: "Create" },
    { value: "delete", label: "Delete" },
    { value: "update", label: "Update" },
  ];
  const [selected, setSelected] = useState([permissionOptions[0]]);

  const initialValues = {
    companyId: checkrole?.title == "superAdmin" ? " " : checkrole,
    title: "",
    slug: "",
  };
  const validationSchema = Yup.object({
    companyId: Yup.string().required("companyId is required"),
    title: Yup.string().required("title is required"),
  });


  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${config.API_URL}/role/add`, { companyId: values.companyId, title: values.title, slug: values.slug, permission: selected }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const userData = response.data;

      if (userData.code == "DUPLICATION") {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Role Already Exists',

        })
        const closeButton = document.querySelector(".btn-close");
        if (closeButton) {
          closeButton.click();
          resetForm();
        }

      }
      if (userData.code == "SUCCESS") {
        Swal.fire({
          icon: 'success',
          title: 'Woh...',
          text: 'User Registered ',

        })
        const closeButton = document.querySelector(".btn-close");
        if (closeButton) {
          closeButton.click();
          resetForm();
          dispatch(fetchRole(token));
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: error,

      })
      const closeButton = document.querySelector(".btn-close");
      if (closeButton) {
        closeButton.click();
        resetForm();
      }
    }
  };
  return (
    <div className={`offcanvas offcanvas-end customeoff `} tabIndex={-1} id="Addrole">
      <div className="offcanvas-header">
        <h5 className="modal-title" id="#gridSystemModal">Add Role</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="container-fluid">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue, errors, dirty, isValid, resetForm }) => {
              return (
                <Form>
                  <div className="row">
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Company ID <span className="text-danger">*</span></label>
                      <Field
                        name="companyId"

                        type="text"
                        disabled={checkrole?.title == "superadmin" ? false : true}
                        placeholder="Enter your  Company ID"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="companyId"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Title<span className="text-danger">*</span></label>
                      <Field
                        name="title"
                        onChange={(e) => {
                          setFieldValue("title", e.target.value);
                          setFieldValue(
                            "slug",
                            e.target.value
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                          );
                        }}
                        type='text'
                        placeholder="Enter your Title"
                        className="form-control"
                      >

                      </Field>
                      <ErrorMessage
                        name="title"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Slug<span className="text-danger">*</span></label>
                      <Field
                        type="text"
                        name="slug"
                        value={initialValues.slug}
                        disabled={true}
                        style={{ background: "#3a353d3d" }}
                        placeholder={values.slug}
                        className="form-control"
                      />
                      <ErrorMessage
                        name="slug"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label className="form-label">Permissions<span className="text-danger">*</span></label>
                      <Select
                        defaultValue={[permissionOptions[0]]}
                        isMulti
                        name="permission"
                        options={permissionOptions}
                        className="basic-multi-select py-2.5 "
                        classNamePrefix="select"
                        onChange={setSelected}
                        value={initialValues.permission}

                      />
                    </div>
                  </div>
                  <div className='grp-btn'>
                    {/* <button className="btn btn-danger light ms-1 me-1">Cancel</button> */}
                    <button type="button" className=" btn btn-danger light ms-1 me-1" data-bs-dismiss="offcanvas" aria-label="Close">
                      Cancel
                    </button>
                    <button data-bs-dismiss="offcanvas" className="btn btn-primary me-1" type="submit">Submit</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default AddRole