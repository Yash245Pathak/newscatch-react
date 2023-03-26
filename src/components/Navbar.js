import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobal } from './Context';

export default function Navbar() {
    const [mode, setMode] = useState('light')
    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const handleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            setBtnText('Disable Dark Mode');
            document.body.style.backgroundColor = '#B0B3B8'
        } else {
            setMode('light')
            setBtnText('Enable Dark Mode')
            document.body.style.backgroundColor = 'white'
        }
    }
    const { setCat } = useGlobal();
    return (
        <div style={{ color: mode === 'light' ? 'black' : 'white' }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={`${mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={() => setCat('general')}>NEWSCATCH</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={() => setCat('general')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" onClick={() => setCat('entertainment')}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" onClick={() => setCat('sports')}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" onClick={() => setCat('health')}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" onClick={() => setCat('science')}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" onClick={() => setCat('technology')}>Technology</Link>
                            </li>

                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${btnText}`}</label>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
