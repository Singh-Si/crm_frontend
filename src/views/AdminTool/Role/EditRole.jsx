

import React, { useState, useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { fetchRole } from "../../../redux/action/role/role";
import axios from 'axios';
import config from '../../../config'
import Select from "react-select";

function EditRole(props) {
  const showModal = props && props.showModal;
  const setShowModal = props && props.setShowModal;
  const permissionOptions = [
    { value: "read", label: "Read" },
    { value: "create", label: "Create" },
    { value: "delete", label: "Delete" },
    { value: "update", label: "Update" },
  ];
  const [initialValues, setInitialValues] = useState({
    companyId: '',
    title: '',
    slug: '',
  });
  const [selected, setSelected] = useState([permissionOptions[0]]);

  
const dispatch = useDispatch()
  useEffect(() => {
    
    if (props) {
      setInitialValues({
        id:props.props._id,
        companyId: props.props.companyId || '',
        title: props.props.title || '',
        slug: props.props.slug || '',
        
      });
    }
  }, [props]);

  const validationSchema = Yup.object({
    companyId: Yup.string().required("companyId is required"),
    title: Yup.string().required("title is required"),
  });
  var token = localStorage.getItem("token");

  const onSubmit = async (values, { resetForm }) => {
    const data = {...values , permission:selected}
    try {
      const response = await axios.put(`${config.API_URL}/role/update/${values.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const userData = response.data;

      
      if (userData.success) {
        Swal.fire({
          icon: 'success',
          title: 'Woh...',
          text: 'User Edited ',

        })
        setShowModal(false)
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
    <>
      <div className="offcanvas offcanvas-end customeoff" tabIndex={-1} id="editrole">
        <div className="offcanvas-header">
          <h5 className="modal-title" id="#gridSystemModal">Edit Role</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="container-fluid">
            <Formik
              enableReinitialize
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
                          value={values.companyId}
                          type="text"
                          disabled= {true}
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
                          value={values.title}
                          onChange={(e) => {
                            setFieldValue("title", e.target.value);
                            setFieldValue(
                              "title",
                              e.target.value
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                            );
                          }}
                          type='text'
                          // placeholder={props.slug}
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
                          value={values.slug}
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
                        {/* <select
                          name="permission"
                          className="form-control"
                          onChange={(e) => {
                            const selectedOptions = Array.from(e.target.options)
                              .filter((option) => option.selected)
                              .map((option) => option.value);
                            setFieldValue( selectedOptions);
                          }}
                          value={values.permission}
                          multiple
                        >
                          <option value="" disabled>Select</option>
                          {permissionOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select> */}
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
                      {/* <button className="btn btn-danger light">Cancel</button> */}
                      <button data-bs-dismiss="offcanvas" className="btn btn-primary me-1" type="submit">Submit</button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div >
    </>
  )
}

export default EditRole