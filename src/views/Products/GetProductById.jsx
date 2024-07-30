import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Pdf from '../../assets/images/pdf.png'
import image from '../../assets/images/image.png'
import videoCamera from '../../assets/images/video-camera.png'
import config from '../../config';
import TitleBreadCrumb from '../../components/TitleBreadCrumb'

function GetProductById() {

  const location = useLocation();
  const data = location && location.state;
  const createdAtDate = new Date(data?.createdAt);
const formattedDate = createdAtDate.toISOString().split('T')[0];
console.log(data, "data");
  return (
    <>

      <div className='page-titles'>
        <TitleBreadCrumb title="Product Details" />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-xl-12">
            
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                
            <h4 className="heading mb-0">Name :  {data.name}</h4>
            <h4 className="heading mb-0">Created AT  : {formattedDate}</h4>
              </div>
              <hr/>
              <div className='card-body d-flex'>
                {data && data.files.length == 0 ?
                  <>
                    <p> There No Files    </p>
                  </> :
                  data && data.files.map((ele) => {
                    const extension = ele && ele.name && ele.name.split('.').pop().toLowerCase();

                    return (
                      <div className='col-md-1 w-25'>

                        <Link to={`${config.API_URL}/uploads/${ele.name}`}>
                          {extension == "pdf" ? <img src={Pdf} alt='pdf' className='img-fluid ' /> : (extension == "png" || extension == "jpg" || extension == "jpeg") ? <img src={image} width={100} /> : extension == "mp4" ? <img src={videoCamera} className='w-5' /> : <img  src={image} className='w-5' width={100}/>}
                          <p style={{ fontSize: "10px", textAlign: "start", paddingTop: "3px" }}>{ele.path}</p>
                        </Link>
                      </div>

                    )

                  })

                }
              </div>
            </div>



          </div>

        </div>
      </div>
      <div className='container position-relative'>

        {/* <div className='row pt-4'>
         

          {data && data.files.length == 0 ?
            <>
              <p> There No Files    </p>
            </> :
            data && data.files.map((ele) => {
              const extension = ele && ele.name && ele.name.split('.').pop().toLowerCase();

              return (
                <div className='col-md-1 w-25'>

                  <Link to={`${config.API_URL}/uploads/${ele.name}`}>
                    {extension == "pdf" ? <img src={Pdf} alt='pdf' className='img-fluid ' /> : (extension == "png" || extension == "jpg" || extension == "jpeg") ? <img src={image} width={100} /> : extension == "mp4" ? <img src={videoCamera} className='w-5' /> : <img />}
                    <p style={{ fontSize: "10px", textAlign: "start", paddingTop: "3px" }}>{ele.path}</p>
                  </Link>
                </div>

              )

            })

          }

        </div> */}
      </div>
    </>
  )
}

export default GetProductById