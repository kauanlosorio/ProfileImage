import React from 'react'
import '../ProfileImage.css'

const ProfileImage = ({imagem, alt, nome, descricao, preco, caracteristicas}) => {
    return(
        <div className='card'>
            <h2 className='nome'>{nome}</h2>
            <img src={imagem} alt={alt} className='imagem'/>
            <p className='descricao'>{descricao}</p>
            <p className='preco'>{preco}</p>
            <p className='caracteristicas'>{caracteristicas}</p>
        </div>
    )
}

export default ProfileImage