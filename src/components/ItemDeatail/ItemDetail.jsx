import React from 'react'

export default function ItemDetail() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://www.luxskinsofficial.com/cdn/shop/products/LUXPS50164_1.jpg?v=1686206446" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">PlayStation 5 </h5>
                <p className="card-text">
                    Nueva playstatrion 5 con acabados de diablko 4  con el juego incluido al mas asequible precio.
                </p>
                <p>Precio Del Producto: $598.999</p>
                <p>SKU: 987-W25-W468E</p>
                <p>Stock: 18</p>
                <a href="#" className="btn btn-primary">
                    Obtener Ahora
                </a>
            </div>
        </div>
    );
}
