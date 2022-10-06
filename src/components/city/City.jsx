import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './city.css'

const City = () => {

    const {data, loading, error} = useFetch("api/hotels/bycity?cities=Đà Nẵng,Hạ Long,Hội An,Sapa,Aleksandrovac Zupa");
    //console.log(data);

  return (
    <div className='cities'>
        <h2 className="cityTitle">Explore Việt Nam</h2>
        <p className='cityDesc'>These popular destinations have a lot to offer</p>
        <div className="cityImages">
            {loading ? (<h2>Loading...</h2>) : (
                <>
                    <div className="cityImage">
                        <Link to='/'>
                            <div className="cityImg">
                                <img src="./assets/images/kg.jpg" alt="Đà Nẵng" />
                            </div>
                            <h4 className='cityImgTitle'>Đà Nẵng</h4>
                            <span className='cityImgProperties'>{data[0]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/'>
                            <div className="cityImg">
                                <img src="./assets/images/bg.jpg" alt="Hạ Long" />
                            </div>
                            <h4 className='cityImgTitle'>Hạ Long</h4>
                            <span className='cityImgProperties'>{data[2]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/'>
                            <div className="cityImg">
                                <img src="./assets/images/ac.jpg" alt="Hội An" />
                            </div>
                            <h4 className='cityImgTitle'>Hội An</h4>
                            <span className='cityImgProperties'>{data[4]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/'>
                            <div className="cityImg">
                                <img src="./assets/images/le.jpg" alt="Cao Bằng" />
                            </div>
                            <h4 className='cityImgTitle'>Cao Bằng</h4>
                            <span className='cityImgProperties'>{data[1]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/'>
                            <div className="cityImg">
                                <img src="./assets/images/sapa.jpg" alt="Sapa" />
                            </div>
                            <h4 className='cityImgTitle'>Sapa</h4>
                            <span className='cityImgProperties'>{data[3]} properties</span>
                        </Link>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default City
