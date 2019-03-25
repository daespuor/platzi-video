import React from 'react';
import './addMedia.css';
import PropTypes from 'prop-types';
export default function AddMedia(props) {
    return (
        <div className="AddMedia">
            <button className="AddMedia-Button" onClick={props.handleShow}>
                Añadir Nuevo <i className="fas fa-plus"></i>
            </button>
            {
                props.isLoading&&
                <p>Añadiendo Video/imagen ...</p>
            }
            {
                props.showForm&&
                <form className="AddMedia-Form" onSubmit={props.handleSubmit}>
                    <div className="AddMedia-FormControl">
                        <label htmlFor="title">Título</label>
                        <input type="text" name="title" id="title" placeholder="Ej. Stranger Things 3" />
                    </div>
                    <div className="AddMedia-FormControl">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" placeholder="Ej. Netflix" />
                    </div>
                    <div className="AddMedia-FormControl">
                        <label htmlFor="url">Url</label>
                        <input type="text" name="url" id="url" placeholder="Ej. http://www.urlvideo.com/" />
                    </div>
                    <div className="AddMedia-FormControl">
                        <label htmlFor="image">Imagen</label>
                        <input type="text" name="image" id="image" placeholder="Ej. http://www.urlimagen.com/" />
                    </div>
                    <div className="AddMedia-FormControl">
                        <label htmlFor="category">Categoria</label>
                        <select  name="category" id="category" >
                            <option>Seleccione...</option>
                            {
                                props.categories.map((item)=>{
                                    return <option 
                                                key={item.get('id')}
                                                value={item.get('id')}
                                            >
                                                {item.get('title')}
                                            </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="AddMedia-FormControl">
                        <div>
                            <button type="submit" className="AddMedia-Button" id="add">
                                Añadir
                            </button>
                            <button  className="AddMedia-Button" id="close" onClick={props.handleShow}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

AddMedia.propTypes={
    categories:PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleShow:PropTypes.func.isRequired,
    showForm:PropTypes.bool.isRequired
}