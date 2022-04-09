import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = ({ fetchMessages }) => {
  const [loader, setLoader] = useState(false);

  const onSubmit = async (data) => {
    setLoader(true);

    const payload = {
      data: {
        event: 'dicky-ira',
        name: data.name,
        message: data.message,
        // attend: data.attend,
      },
    };

    const resp = await axios.post('http://localhost:1337/api/messages', payload);

    if (resp.status === 200) {
      fetchMessages();
    } else {
      console.log(resp);
    }

    setLoader(false);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="form row d-flex justify-content-center align-items-center px-3 mt-3">
      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center mb-5">
        <form className="w-100 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input className="form-control" {...register('name', { required: true, maxLength: 100 })} />
          </div>
          <div className="form-group mb-3">
            <label>Message</label>
            <textarea className="form-control" {...register('message', { required: true, maxLength: 500 })} />
          </div>
          {/* <label>Kehadiran</label>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input {...register('attend', { required: true })} type="radio" value={true} />
              <label className="form-check-label">Ya</label>
            </div>
            <div className="form-check form-check-inline">
              <input {...register('attend', { required: true })} type="radio" value={false} />
              <label className="form-check-label">Tidak</label>
            </div>
          </div> */}
          <button type="submit" className="w-100 btn btn-secondary  align-self-end">
            {loader ? 'Loading...' : 'Send Messages'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;